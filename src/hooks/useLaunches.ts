import { useCallback, useEffect, useState } from "react";
import { fetchPastLaunchData, fetchUpcomingLaunchData } from "../services/api";
import { Launch } from "../services/types";
import { sortLaunches } from "../utils/sortLaunches";

export const useLaunches = () => {
    const [pastLaunches, setPastLaunches] = useState<Launch[]>([])
    const [upcomingLaunches, setUpcomingLaunches] = useState<Launch[]>([])

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const fetchPastLaunches = useCallback(() => {
        setIsLoading(true);
        setIsError(false);

        fetchPastLaunchData()
            .then((launches: Launch[]) => {
                // all launches endpoint includes upcoming launches. in order to sort by date descending, we filter them out
                if (launches) {
                    setPastLaunches(sortLaunches({ launches, reverse: true }).filter(({ upcoming }) => !upcoming))
                }
            })
            .catch(error => {
                setIsError(!!error);
            })
            .finally(() => setIsLoading(false))

    }, [pastLaunches])

    const fetchUpcomingLaunches = useCallback(() => {
        setIsLoading(true);
        setIsError(false);

        fetchUpcomingLaunchData()
            .then((launches: Launch[]) => {
                // upcoming launches are sorted ascending by date, so the nearest one is on top
                if (launches) {
                    setUpcomingLaunches(sortLaunches({ launches }))
                }
            })
            .catch(error => {
                setIsError(!!error);
            })
            .finally(() => setIsLoading(false))

    }, [pastLaunches])


    const fetchData = () => {
        fetchPastLaunches();
        fetchUpcomingLaunches();
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        isLoading,
        isError,
        sections: [{ title: 'Upcoming 🚀 Launches', data: upcomingLaunches }, { title: 'Past 🚀 Launches', data: pastLaunches }],
        fetchData
    }
}