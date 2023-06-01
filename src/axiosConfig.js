import axios from 'axios';

const API_URL = 'https://ris-app-server.herokuapp.com';

export const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
