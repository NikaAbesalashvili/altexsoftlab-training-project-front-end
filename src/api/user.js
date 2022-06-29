import axios from "axios";

const API = axios.create({ baseURL: 'https://localhost:7155/api' });

API.interceptors.request.use((request) => {
    if(localStorage.getItem('profile')) {
        request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return request;
});

export const userRegistration = (userData) => API.post('/User/RegisterUser', userData);
export const authenticateUser = (userData) => API.post('/Authentication/Authenticate', userData);
