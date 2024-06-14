import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IdCard = () => {
    const profileImageUrl = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Random profile image from Unsplash

    const handleOrderClick = () => {
        toast.success('Order placed successfully!');
    }

    return (
        <div className="flex justify-center items-center  p-9 bg-gray-100">
            <div className="w-96 bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-500 h-20 w-full rounded-t-lg flex justify-center items-center">
                    <div className="bg-white h-8 w-12 rounded-full"></div>
                </div>
                <div className="mt-4">
                    <img
                        src={ profileImageUrl }
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                </div>
                <div className="border-t border-gray-300 mt-6 pt-4">
                    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                    <p className="text-sm text-gray-600">Employee</p>
                    <p className="text-sm text-gray-600">EMP123456</p>
                </div>
                <hr className="my-4" />
                <div className="text-gray-700">
                    <p className="text-sm font-semibold"><strong>Company XYZ</strong></p>
                    <p className="text-xs">1234 Elm Street</p>
                    <p className="text-xs">City, State, 12345</p>
                    <p className="text-xs">Ph: (123) 456-7890</p>
                </div>
                <button
                    className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    onClick={ handleOrderClick }
                >
                    Order Now
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default IdCard;
