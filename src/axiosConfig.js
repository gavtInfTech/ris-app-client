import axios from 'axios';

const API_URL = 'https://ris-app-server.herokuapp.com';

export const api = axios.create({
   
    baseURL: API_URL
})
