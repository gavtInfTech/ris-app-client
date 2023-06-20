import axios from 'axios';

const API_URL = 'http://192.168.1.67:8080';

export const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
