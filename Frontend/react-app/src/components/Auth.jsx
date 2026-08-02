import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

const getAuthToken = () => localStorage.getItem('token');

const getDecodedToken = () => {
  const token = getAuthToken();
  return token ? jwtDecode(token) : null;
};

export { setAuthToken, getAuthToken, getDecodedToken };