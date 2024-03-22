import { useState, useCallback, useEffect } from "react";
import fetchLaunchData from "../services/api";
import { Launch } from "../services/types";

export const useLaunches = () => {
    const [data, setData] = useState<Launch[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const fetchData = useCallback(() => {
        setIsLoading(true);
        setIsError(false);
        fetchLaunchData()
            .then((response: Launch[]) => {
                if (response) {
                    setData(response)
                }
            })
            .catch(error => {
                setIsError(true);
                console.log(error);
            })
            .finally(() => setIsLoading(false))
    }, [data])

    useEffect(() => {
        fetchData()
    }, [])

    return {
        isLoading,
        isError,
        data,
        fetchData
    }
}