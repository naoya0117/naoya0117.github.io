import { axios } from '@/lib/axios';

type email = {
    name: string;
    email?: string;
    content: string;
}

export const sendEmail = (data : email ) => {
    return axios.post('/api/email/send', data);
}