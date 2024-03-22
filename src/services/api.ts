import axios, { AxiosResponse } from 'axios';
import { Launch } from './types';



// Define the function to fetch data from the API
async function fetchLaunchData(): Promise<Launch[]> {
    try {
        const response: AxiosResponse<Launch[]> = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
        return response.data;
    } catch (error) {
        console.error('Error fetching launch data:', error);
        return [];
    }
}

export default fetchLaunchData;
