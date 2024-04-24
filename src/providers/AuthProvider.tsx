import * as React from "react";
import { useState, createContext, useEffect } from "react";
import { getUser, AuthUser } from "@/features/auth";

type AuthContextType = {
    setAuth: (value: boolean) => void;
    setUser: (value: AuthUser) => void;
    isAuth: boolean;
    User: AuthUser;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [isAuth, setAuth] = useState<boolean>(false);
    const [User, setUser] = useState<AuthUser>({} as AuthUser);

    const fetchUser = async () => {
        try {
            const user = await getUser();
            console.log(user);
            setUser(user);
            setAuth(true);
        } catch (error) {
        };
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setAuth, User, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
