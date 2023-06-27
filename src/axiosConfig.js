import axios from 'axios';

const API_URL = 'http://rias.by/api';

export const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
