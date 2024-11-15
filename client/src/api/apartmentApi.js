import axios from 'axios';

export const API_URL = 'http://localhost:3000/api';

export const getApartments = () => axios.get(`${API_URL}/apartments`);
export const createApartment = (apartment) => axios.post(`${API_URL}/apartments`, apartment);
export const updateApartment = (id, apartment) => axios.put(`${API_URL}/apartments/${id}`, apartment);
export const deleteApartment = (id) => axios.delete(`${API_URL}/apartments/${id}`);
