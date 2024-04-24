import Axios, { AxiosInstance } from 'axios';
import { API_URL } from '@/config';

const headers: { [key: string]: string } = {
  "Content-type": "application/json",
  "Accept": "application/json",
  "X-Requested-With": "XMLHttpRequest"
};

export const axios : AxiosInstance = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers,
});
