import React, { useEffect, useState, ReactNode, useCallback } from 'react';

let logoutTimer: NodeJS.Timeout | null = null;

interface AuthorizationContextType {
    token: string | null;
    isLoggedIn: boolean;
    setToken: (token: string) => void;
    login: (token: string, userId: string, expirationTime: number, isAdmin: boolean) => void;
    logout: () => void;
    userId: string | null;
    isAdmin: boolean;
}

const AuthorizationContext = React.createContext<AuthorizationContextType>({
    token: null,
    isLoggedIn: false,
    setToken: () => {},
    login: (token, userId, expirationTime, isAdmin) => {},
    logout: () => {},
    userId: null,
    isAdmin: false,
});

const calculateTimeLeft = (expirationTime: number) => {
    const currentTime = Date.now() / 1000;
    const timeLeft = expirationTime - currentTime;

    return timeLeft;
};

const retrievedStored = () => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const storedExpirationTime = localStorage.getItem('expirationTime');

    if (storedExpirationTime) {
        const remainingTime = calculateTimeLeft(Number(storedExpirationTime));

        if (remainingTime <= 60) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('isAdmin');
            localStorage.removeItem('expirationTime');
            return null;
        }

        return {
            token: storedToken,
            userId: storedUserId,
            isAdmin: JSON.parse(storedIsAdmin || 'false'),
            expirationTime: remainingTime,
        };
    }

    return null;
};

export const AuthorizationProvider = ({ children }: { children: ReactNode }) => {
    const stored = retrievedStored();
    let initialToken = stored?.token || null;
    let initialUserId = stored?.userId || null;
    let initialIsAdmin = stored?.isAdmin || false;

    const [token, setToken] = useState(initialToken);
    const [userId, setUserId] = useState(initialUserId);
    const [isAdmin, setIsAdmin] = useState(initialIsAdmin);

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        setUserId(null);
        setIsAdmin(false);
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('userId');
        localStorage.removeItem('expirationTime');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (
        token: string,
        userId: string,
        expirationTime: number,
        isAdmin: boolean
    ) => {
        setToken(token);
        setUserId(userId);
        setIsAdmin(isAdmin);

        localStorage.setItem('token', token);
        localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
        localStorage.setItem('userId', userId);
        localStorage.setItem('expirationTime', expirationTime.toString());

        const remainingTime = calculateTimeLeft(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime * 1000);
    };

    useEffect(() => {
        if (stored) {
            logoutTimer = setTimeout(logoutHandler, stored.expirationTime * 1000);
        }
    }, [stored, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        isAdmin: isAdmin,
        login: loginHandler,
        logout: logoutHandler,
        userId: userId,
        setToken: setToken,
    };

    return (
        <AuthorizationContext.Provider value={contextValue}>
            {children}
        </AuthorizationContext.Provider>
    );
};
export default AuthorizationContext;
