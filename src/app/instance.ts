import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://api.kcisa.kr',
  timeout: 1000,
});
