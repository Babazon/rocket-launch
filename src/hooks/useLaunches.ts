import { useCallback, useEffect, useState } from 'react';

import { fetchLaunchData } from '../services/api';
import { Launch } from '../services/types';
import { sortLaunches } from '../utils/sortLaunches';

export const useLaunches = () => {
  const [pastLaunches, setPastLaunches] = useState<Launch[]>([]);
  const [upcomingLaunches, setUpcomingLaunches] = useState<Launch[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchLaunches = useCallback(() => {
    setIsLoading(true);
    setIsError(false);

    fetchLaunchData()
      .then((launches: Launch[]) => {
        if (launches) {
          const pastLaunches = launches.filter(({ upcoming }) => !upcoming);
          const upcomingLaunches = launches.filter(({ upcoming }) => upcoming);
          setPastLaunches(sortLaunches({ launches: pastLaunches, reverse: true }));
          setUpcomingLaunches(sortLaunches({ launches: upcomingLaunches }));
        }
      })
      .catch(error => {
        setIsError(!!error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const fetchData = () => {
    fetchLaunches();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    sections: [
      { title: 'Upcoming 🚀 Launches', data: upcomingLaunches },
      { title: 'Past 🚀 Launches', data: pastLaunches },
    ],
    fetchData,
  };
};
