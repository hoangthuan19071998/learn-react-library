import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../views/HomePage';
import LoginPage from '../views/LoginPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Nơi chứa Header/Footer chung
        children: [
            { index: true, element: <HomePage /> },
            { path: "login", element: <LoginPage /> }
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" replace />, // Redirect nếu sai đường dẫn
    }
]);