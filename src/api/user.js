import axios from "axios";

const API = axios.create({ baseURL: 'https://localhost:7155/api' });

API.interceptors.request.use((request) => {
    if(localStorage.getItem('travel-agency-user')) {
        const { token } = JSON.parse(localStorage.getItem('travel-agency-user'));
        
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

export const userRegistration = (userData) => API.post('/User/RegisterUser', userData);
export const authenticateUser = (userData) => API.post('/Authentication/Authenticate', userData);
export const getUserById = (userId) => API.get(`/User/GetById/${userId}`);
export const updateUserProfile = (userId, userData) => API.put(`/User/${userId}`, userData);
