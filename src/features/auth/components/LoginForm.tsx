import { useState } from 'react';
import { LoginCredentials, login as loginApi } from '@/features/auth';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const credentials: LoginCredentials = { email, password };
        try {
            const response = await loginApi(credentials);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <p className='text-center'>管理者用ログインページ</p>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-10" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-5" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block" onClick={login}>Login</button>
        </div>
    );
}