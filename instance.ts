import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.kcisa.kr',
  timeout: 1000,
});
