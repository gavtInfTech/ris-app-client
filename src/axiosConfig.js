import axios from 'axios';

const API_URL = 'http://192.168.1.67/api';

export const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
