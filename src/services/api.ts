import Axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const axios = Axios.create({
    baseURL: baseUrl,
    timeout: 1000
});
