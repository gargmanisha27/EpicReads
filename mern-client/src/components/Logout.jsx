import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert("Sign-out successfully!!!");
            navigate(from, { replace: true });
        }).catch((error) => {
            // An error happened.
            console.error("Logout error:", error);
        });
    };

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">You are about to log out</h1>
                <p className="text-gray-700 mb-6">Are you sure you want to sign out?</p>
                <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200 ease-in-out"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Logout;
