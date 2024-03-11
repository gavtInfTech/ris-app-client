    import axios from 'axios';

    const API_URL = 'https://rias.by/api';

    export const api = axios.create({
        withCredentials: true,
        baseURL: API_URL
    })
