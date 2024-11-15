import axios from 'axios';
import { API_URL } from '../api/apartmentApi';

export const login = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
  localStorage.setItem('token', data.token);
  return data;
};

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

