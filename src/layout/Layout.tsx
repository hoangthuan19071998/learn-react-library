import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

const Layout: React.FC = () => {
    // Helper function để định dạng link đang active
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* 1. Thanh Menu phía trên (Navigation Bar) */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bold text-blue-600">
                                MyLogo
                            </Link>
                        </div>

                        {/* Menu Links */}
                        <div className="hidden md:flex space-x-4">
                            <NavLink to="/" className={navLinkClass}>
                                Trang chủ
                            </NavLink>
                            <NavLink to="/login" className={navLinkClass}>
                                Đăng nhập
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button (Chỉ hiển thị icon) */}
                        <div className="md:hidden">
                            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                <span className="sr-only">Open menu</span>
                                ☰
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* 2. Khu vực hiển thị nội dung (Main Content) */}
            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                {/* Outlet sẽ render các component con như HomePage, LoginPage... */}
                <Outlet />
            </main>

            {/* 3. Footer đơn giản */}
            <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                © 2025 React App của tôi. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;