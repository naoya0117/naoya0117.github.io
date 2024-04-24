import { axios } from '@/lib/axios';
import { AuthUser } from '../types';

export const getUser = async (): Promise<AuthUser> => {
    return await axios.get('/api/user');
}