import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (errors[id]) {
            setErrors({ ...errors, [id]: '' });
        }
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!formData.message) formErrors.message = 'Message is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form Data:', formData);
            setSubmitted(true);
            toast.success('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setSubmitted(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={ handleSubmit }>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className={ `w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}` }
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={ formData.name }
                        onChange={ handleChange }
                    />
                    { errors.name && <p className="text-red-500 text-xs italic">{ errors.name }</p> }
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={ `w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'}` }
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={ formData.email }
                        onChange={ handleChange }
                    />
                    { errors.email && <p className="text-red-500 text-xs italic">{ errors.email }</p> }
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className={ `w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline ${errors.message && 'border-red-500'}` }
                        id="message"
                        placeholder="Your message"
                        rows="4"
                        value={ formData.message }
                        onChange={ handleChange }
                    ></textarea>
                    { errors.message && <p className="text-red-500 text-xs italic">{ errors.message }</p> }
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
                { submitted && <p className="text-green-500 text-xs italic mt-4">Form submitted successfully!</p> }
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactPage;
