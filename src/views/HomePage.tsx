import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    React App
                </h1>

                <p className="text-lg text-gray-600 mb-8">
                    React, TypeScript và Tailwind CSS, hệ thống Routing, Validation
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Đăng nhập ngay
                    </button>

                    <button
                        onClick={() => window.open('https://react.dev', '_blank')}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                    >
                        Học React
                    </button>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <FeatureCard title="TypeScript" desc="An toàn về kiểu dữ liệu, ít bug hơn." icon="🛡️" />
                <FeatureCard title="Zod & RHF" desc="Xử lý form chuyên nghiệp và nhanh gọn." icon="📝" />
                <FeatureCard title="React Router" desc="Điều hướng mượt mà giữa các trang." icon="🗺️" />
            </div>
        </div>
    );
};

// Component con hỗ trợ hiển thị
interface FeatureCardProps {
    title: string;
    desc: string;
    icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, icon }) => (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
);

export default HomePage;