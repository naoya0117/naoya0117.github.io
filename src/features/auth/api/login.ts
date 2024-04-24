import { axios } from '@/lib/axios';
import { AxiosResponse } from 'axios';

export type LoginCredentials = {
    email: string;
    password: string;
}

export const login =  (credentials: LoginCredentials): Promise<AxiosResponse> => {
    axios.get('/sanctum/csrf-cookie');
    return axios.post('/api/login', credentials);
}