import axios from 'axios';
import useAuthStore from '../stores/useAuthStore'

const api = axios.create({
  baseURL: '/api', // Adjust base URL as needed
});

// Interceptor for attaching access token to requests headers
api.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, 
    (error) => {
        console.error('Request error:', error.message);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => { // Successful response
        console.log('response: ', response);
        return response;
    },
    async (error) => { // Handle token refresh in case of 401 (Unauthorized) errors
        console.error(error)
        if (error.response?.status === 401) {
            console.log("errorr")
        }
        
        return Promise.reject(error);
    }
);

export default api;
