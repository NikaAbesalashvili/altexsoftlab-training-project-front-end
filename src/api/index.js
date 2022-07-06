import axios from "axios";

const API = axios.create({ baseURL: 'https://localhost:7155/api' });

API.interceptors.request.use((request) => {
    if(localStorage.getItem('travel-agency-user')) {
        const { token } = JSON.parse(localStorage.getItem('travel-agency-user'));
        
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
});

// User Routes
export const userRegistration = (userData) => API.post('/User/RegisterUser', userData);
export const authenticateUser = (userData) => API.post('/Authentication/Authenticate', userData);
export const getUserById = (userId) => API.get(`/User/GetById/${userId}`);
export const updateUserProfile = (userId, userData) => API.put(`/User/${userId}`, userData);

// Apartment routes
export const getApartment = (userId) => API.get(`/Apartment/${userId}`);
export const addApartment = (apartamentData) => API.post('/Apartment/AddApartment', apartamentData);
export const updateApartment = (userId, apartamentData) => API.put(`/Apartment/UpdateApartment/${userId}`, apartamentData);
export const searchApartment = (apartmentData) => API.post('/Apartment/SearchApartment', apartmentData);
