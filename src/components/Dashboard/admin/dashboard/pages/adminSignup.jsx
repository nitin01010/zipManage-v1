import React, { useState } from 'react';

const AdminSignup = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyEmail: '',
        companyNumber: '',
        numberOfPeople: '',
        companyAddress: '',
        industry: '',
        website: '',
        password: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Business Details</h1>
                <form onSubmit={ handleSubmit } className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={ formData.companyName }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">Company Email</label>
                        <input
                            type="email"
                            id="companyEmail"
                            name="companyEmail"
                            value={ formData.companyEmail }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="companyNumber" className="block text-sm font-medium text-gray-700">Company Number</label>
                        <input
                            type="tel"
                            id="companyNumber"
                            name="companyNumber"
                            value={ formData.companyNumber }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={ formData.password }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700">Number of People</label>
                        <select
                            id="numberOfPeople"
                            name="numberOfPeople"
                            value={ formData.numberOfPeople }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select...</option>
                            <option value="1-10">1 to 10</option>
                            <option value="10-50">10 to 50</option>
                            <option value="50-100">50 to 100</option>
                            <option value="100+">100+</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">Company Address</label>
                        <input
                            type="text"
                            id="companyAddress"
                            name="companyAddress"
                            value={ formData.companyAddress }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
                        <input
                            type="text"
                            id="industry"
                            name="industry"
                            value={ formData.industry }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={ formData.website }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="sm:col-span-2 lg:col-span-3">
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
                        <textarea
                            id="comments"
                            name="comments"
                            value={ formData.comments }
                            onChange={ handleChange }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-3">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminSignup;
