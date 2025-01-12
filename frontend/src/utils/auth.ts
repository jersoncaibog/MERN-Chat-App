import axios from 'axios';
import useAuthStore from '../stores/useAuthStore';
import api from './api';

export const refreshAccessToken = async () => {
  try {
    const response = await axios.post('/api/auth/refresh-token');

    console.log(response)

    const newAccessToken = response.data.accessToken;

    useAuthStore.getState().setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    useAuthStore.getState().clearAccessToken();
    return null;
  }
};

export const useLogout = () => {
  const { clearAccessToken } = useAuthStore();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout', {}, { withCredentials: true });
      clearAccessToken(); // Clear state on logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return handleLogout;
}