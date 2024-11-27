import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '//api.kcisa.kr',
  timeout: 1000,
});
