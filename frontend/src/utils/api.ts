import axios from 'axios';
import useAuthStore from '../stores/useAuthStore'
import { refreshAccessToken } from './auth';

const api = axios.create({
  baseURL: '/api', // Adjust base URL as needed
});

// Interceptor for attaching access token to requests
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


// Handle token refresh in case of 401 (Unauthorized) errors
api.interceptors.response.use(
    (response) => { // Successful response
        console.log('response: ', response);
        return response;
    },
    async (error) => { // Error
        if (error.response?.status === 401) {
            const newAccessToken = await refreshAccessToken();
            
            if (newAccessToken) {
                // Retry the original request with the new access token
                error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axios(error.config); // Retry request
            } else {
                console.error('Failed to refresh token. Logging out user...');
                return Promise.reject(error); // Reject the original error if refresh fails
            }
        }
        
        return Promise.reject(error);
    }
);

export default api;
