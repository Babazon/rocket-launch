import axios, { AxiosResponse } from 'axios';
import { Launch } from './types';


export const fetchPastLaunchData = async (): Promise<Launch[]> => {
    try {
        const response: AxiosResponse<Launch[]> = await axios.get('https://api.spacexdata.com/v4/launches');
        return response.data;
    } catch (error) {
        console.error('Error fetching launch data:', error);
        return [];
    }
}


export const fetchUpcomingLaunchData = async (): Promise<Launch[]> => {
    try {
        const response: AxiosResponse<Launch[]> = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
        return response.data;
    } catch (error) {
        console.error('Error fetching launch data:', error);
        return [];
    }
}

