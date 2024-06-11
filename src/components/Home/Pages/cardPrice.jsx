import React from 'react';

const CardPrice = () => {
    return (
        <div className="container mx-auto py-8 px-4 md:px-0">
            <h1 className="text-center text-4xl font-bold mb-8">Choose Your Plan</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center md:w-1/3 w-full">
                    <h2 className="text-2xl font-bold mb-4">Basic</h2>
                    <p className="text-gray-600 mb-6">Access essential features</p>
                    <ul className="text-left mb-6">
                        <li className="flex items-center mb-2"><span className="text-green-500 mr-2">&#10003;</span> Limited Access</li>
                        <li className="flex items-center mb-2"><span className="text-green-500 mr-2">&#10003;</span> Basic Support</li>
                        <li className="flex items-center mb-2"><span className="text-green-500 mr-2">&#10003;</span> Standard Features</li>
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Select Basic</button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center md:w-1/3 w-full mt-4 md:mt-0">
                    <h2 className="text-2xl font-bold mb-4">Premium</h2>
                    <p className="text-gray-600 mb-6">Access all features</p>
                    <ul className="text-left mb-6">
                        <li className="flex items-center mb-2"><span className="text-green-500 mr-2">&#10003;</span> Full Access</li>
                        <li className="flex items-center mb-2"><span className="text-green-500 mr-2">&#10003;</span> Priority Support</li>
                        <li className="flex items-center mb-2"><span className="text-green-500 mr-2">&#10003;</span> Advanced Features</li>
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Select Premium</button>
                </div>
            </div>
        </div>
    );
};

export default CardPrice;
