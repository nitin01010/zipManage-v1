import React, { useState } from 'react';

// Sample data for employees
const initialEmployees = [
    { id: 1, name: 'John Doe 1', status: 'pending', date: '2024-01-10' },
    { id: 4, name: 'Jane Doe 2', status: 'successful', date: '2024-04-10' },
    { id: 6, name: 'Jane Doe 3', status: 'successful', date: '2024-06-10' },
    { id: 8, name: 'Jane Doe 4', status: 'successful', date: '2024-08-10' },
    { id: 10, name: 'Jane Doe 5', status: 'successful', date: '2024-10-10' },
    { id: 11, name: 'John Doe 6', status: 'successful', date: '2024-11-10' },
    { id: 13, name: 'Jane Smith', status: 'recent', date: '2024-06-09' },
    { id: 14, name: 'Mark Johnson', status: 'successful', date: '2024-06-08' },
];

const Salary = () => {
    const [employees, setEmployees] = useState(initialEmployees);

    const paySalary = (id) => {
        setEmployees(employees.map(emp =>
            emp.id === id ? { ...emp, status: 'recent', date: new Date().toISOString().split('T')[0] } : emp
        ));
    };

    const getSectionData = (status) => employees.filter(emp => emp.status === status);

    const todayDate = new Date().toISOString().split('T')[0];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Salary Management</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SalarySection
                    title="Pending Salary"
                    data={ getSectionData('pending') }
                    onPay={ paySalary }
                    todayDate={ todayDate }
                />
                <SalarySection
                    title="Recent Salary"
                    data={ getSectionData('recent') }
                    todayDate={ todayDate }
                />
                <SalarySection
                    title="Successful Salary"
                    data={ getSectionData('successful') }
                    todayDate={ todayDate }
                />
            </div>
        </div>
    );
};

const SalarySection = ({ title, data, onPay, todayDate }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white p-4 shadow rounded">
            <h2 className="text-2xl font-semibold mb-4">{ title }</h2>
            { data.length === 0 ? (
                <p className="text-gray-500">No data available</p>
            ) : (
                <ul>
                    { data.map(emp => (
                        <li key={ emp.id } className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
                            <span>{ emp.name }</span>
                            <span className={ `text-sm ${emp.date === todayDate ? 'text-green-300 font-bold' : 'text-gray-500'}` }>
                                { formatDate(emp.date) }
                            </span>
                            { onPay && emp.status === 'pending' && (
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    onClick={ () => onPay(emp.id) }
                                >
                                    Pay
                                </button>
                            ) }
                        </li>
                    )) }
                </ul>
            ) }
        </div>
    );
};

export default Salary;
