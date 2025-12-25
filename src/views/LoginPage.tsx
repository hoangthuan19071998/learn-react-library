import React from 'react';
import { NavLink, } from 'react-router-dom';
const LoginPage: React.FC = () => {

    return <>

        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Đăng nhập</h2>
        </div>


        <div className="text-center mt-6">

            <p className="text-sm text-gray-600">
                Chưa có tài khoản? <NavLink to="/registration" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                    Đăng ký
                </NavLink>
            </p>
        </div>
    </>
}
export default LoginPage