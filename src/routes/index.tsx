import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "@/features/home";
import { Blog } from "@/features/blog";
import { Contact } from "@/features/contact";
import { MainLayout } from "@/components/Layout";

const App = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};

export const AppRoutes = () => {
    const commonRoutes = [
        {
            element: <App />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/blog', element: <Blog />},
                { path: '/contact', element: <Contact />},
            ]
        }
    ]

    return useRoutes(commonRoutes);
}
