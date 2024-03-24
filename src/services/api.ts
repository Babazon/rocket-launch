import axios, { AxiosResponse } from 'axios';

import { Launch, Maybe, Rocket } from './types';

export const fetchLaunchData = async (): Promise<Launch[]> => {
  try {
    const response: AxiosResponse<Launch[]> = await axios.get(
      'https://api.spacexdata.com/v4/launches',
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching launch data:', error);
    return [];
  }
};

export const fetchRocketData = async (id: string): Promise<Maybe<Rocket>> => {
  try {
    const response: AxiosResponse<Rocket> = await axios.get(
      `https://api.spacexdata.com/v4/rockets/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching launch data:', error);
    return undefined;
  }
};
