import useAuthStore from '../stores/useAuthStore';
import api from './api';
import { useNavigate } from 'react-router';

export const refreshAccessToken = async () => {
  
  const auth = useAuthStore.getState()
  
  try {
    console.log('Refreshing access token')
    const response = await api.post('/auth/refresh-token');
    const { newAccessToken, user } = response.data


    auth.setAccessToken(newAccessToken);
    auth.setUserId(user.id);

    // console.log(auth.accessToken)

    return newAccessToken;

  } catch (error) {
    console.error('Error refreshing access token:', error);
    auth.clearAccessToken();
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