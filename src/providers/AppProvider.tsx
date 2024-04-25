import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './AuthProvider';
const Router = typeof window !== 'undefined' ? require('react-router-dom').BrowserRouter : require('react-router-dom/server').StaticRouter;



const ErrorFallback = () => {
    return (
        <div>
            <h1>Something went wrong.</h1>
        </div>
    );
}

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HelmetProvider>
                <Router>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </Router>
            </HelmetProvider>
        </ErrorBoundary>
    );
}