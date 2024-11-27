import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'http://api.kcisa.kr',
  baseURL: '/api',
  timeout: 1000,
});
