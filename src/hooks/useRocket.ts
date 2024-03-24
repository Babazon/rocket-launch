import { useCallback, useEffect, useState } from 'react';

import { fetchRocketData } from '../services/api';
import { Maybe, Rocket } from '../services/types';

export const useRocket = (rocketId: string) => {
  const [rocket, setRocket] = useState<Maybe<Rocket>>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchRocket = useCallback(() => {
    setIsLoading(true);
    setIsError(false);

    fetchRocketData(rocketId)
      .then((rocket: Maybe<Rocket>) => {
        setRocket(rocket);
      })
      .catch(error => {
        setIsError(!!error);
      })
      .finally(() => setIsLoading(false));
  }, [rocketId]);

  const fetchData = () => {
    fetchRocket();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    rocket,
    fetchRocket,
  };
};
