import * as React from 'react';
import { Head } from '@/components/Head';

type items = {
    id: string;
    name: string;
};

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
    description: string;
    sideItems?: items[];
};

export const ContentLayout = ({ children, title, description}: ContentLayoutProps) => {
    return (
        <>
            <Head title={title} description={description} />
            <div className="flex flex-col pt-20">
                <main className="flex-grow min-w-screen">
                    {children}
                </main>
            </div>
        </>
    );
};