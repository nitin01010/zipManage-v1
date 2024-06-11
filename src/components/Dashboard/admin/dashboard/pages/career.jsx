// src/components/JoinUs.js
import React from 'react';

const Career = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-md w-full">
                <h1 className="text-4xl font-bold mb-4">Join Us</h1>
                <p className="text-xl mb-6">We are currently working on something amazing. Stay tuned!</p>
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-600 opacity-75 rounded-lg"></div>
                    <button className="relative w-full py-3 px-6 bg-purple-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105">
                        Coming Soon
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Career;
