import { useCallback, useEffect, useState } from "react";
import { fetchPastLaunchData, fetchUpcomingLaunchData } from "../services/api";
import { Launch } from "../services/types";

export const useLaunches = () => {
    const [pastLaunches, setPastLaunches] = useState<Launch[]>([])
    const [upcomingLaunches, setUpcomingLaunches] = useState<Launch[]>([])

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const fetchPastLaunches = useCallback(() => {
        setIsLoading(true);
        setIsError(false);

        fetchPastLaunchData()
            .then((response: Launch[]) => {
                if (response) {
                    setPastLaunches(response)
                }
            })
            .catch(error => {
                setIsError(true);
                console.log(error);
            })
            .finally(() => setIsLoading(false))

    }, [pastLaunches])

    const fetchUpcomingLaunches = useCallback(() => {
        setIsLoading(true);
        setIsError(false);

        fetchUpcomingLaunchData()
            .then((response: Launch[]) => {
                if (response) {
                    setUpcomingLaunches(response)
                }
            })
            .catch(error => {
                setIsError(true);
                console.log(error);
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