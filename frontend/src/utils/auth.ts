import useAuthStore from '../stores/useAuthStore';
import api from './api';
import { useNavigate } from 'react-router';

export const refreshAccessToken = async () => {
  try {
    console.log('Refreshing access token')
    const response = await api.post('/auth/refresh-token');
    const { newAccessToken, user } = response.data

    useAuthStore.getState().setAccessToken(newAccessToken);
    useAuthStore.getState().setUserId(user.id);

    return newAccessToken;

  } catch (error) {
    console.error('Error refreshing access token:', error);
    useAuthStore.getState().clearAccessToken();
    return null;
  }
};

export const useLogout = () => {
  const { clearAccessToken } = useAuthStore();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout', {}, { withCredentials: true });
      clearAccessToken(); // Clear state on logout
      navigate("/auth/login")
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return handleLogout;
}