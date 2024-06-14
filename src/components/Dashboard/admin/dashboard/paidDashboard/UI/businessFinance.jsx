import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import 'tailwindcss/tailwind.css';

const data = [
    { name: 'Jan', credit: 4000, debit: 2400, expenses: 2400 },
    { name: 'Feb', credit: 3000, debit: 1398, expenses: 2210 },
    { name: 'Mar', credit: 2000, debit: 9800, expenses: 2290 },
    { name: 'Apr', credit: 2780, debit: 3908, expenses: 2000 },
    { name: 'May', credit: 1890, debit: 4800, expenses: 2181 },
    { name: 'Jun', credit: 2390, debit: 3800, expenses: 2500 },
    { name: 'Jul', credit: 3490, debit: 4300, expenses: 2100 },
];

const BusinessFinance = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [value, setValue] = useState('');
    const [transactionDetails, setTransactionDetails] = useState({ date: '', time: '', client: '' });
    const [transactions, setTransactions] = useState([]);
    const [totals, setTotals] = useState({
        moneyInBank: 50000,
        credit: 20000,
        debit: 10000,
        expenses: 5000,
    });

    const handleOpenModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setValue('');
        setTransactionDetails({ date: '', time: '', client: '' });
    };

    const handleUpdateValue = () => {
        const newTransaction = {
            type: modalType,
            value: parseFloat(value),
            date: transactionDetails.date,
            time: transactionDetails.time,
            client: transactionDetails.client
        };
        setTransactions([...transactions, newTransaction]);
        setTotals({
            ...totals,
            [modalType]: totals[modalType] + parseFloat(value),
        });
        handleCloseModal();
    };

    const handleShowTransactions = (type) => {
        setModalType(type);
        setIsTransactionModalOpen(true);
    };

    const handleCloseTransactionModal = () => {
        setIsTransactionModalOpen(false);
    };

    return (
        <div className="p-2 bg-slate-100    ">
            <h1 className="text-3xl font-bold mb-5    text-center">Business Finance Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold mb-2">Total Money in Bank</h2>
                    <p className="text-2xl font-bold">${ totals.moneyInBank }</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={ () => handleOpenModal('moneyInBank') }
                    >
                        Update
                    </button>
                    <button
                        className="mt-2 px-4 py-2 bg-blue-300 text-white rounded-lg"
                        onClick={ () => handleShowTransactions('moneyInBank') }
                    >
                        Show Transactions
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold mb-2">Total Credit</h2>
                    <p className="text-2xl font-bold">${ totals.credit }</p>
                    <button
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                        onClick={ () => handleOpenModal('credit') }
                    >
                        Update
                    </button>
                    <button
                        className="mt-2 px-4 py-2 bg-green-300 text-white rounded-lg"
                        onClick={ () => handleShowTransactions('credit') }
                    >
                        Show Transactions
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold mb-2">Total Debit</h2>
                    <p className="text-2xl font-bold">${ totals.debit }</p>
                    <button
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                        onClick={ () => handleOpenModal('debit') }
                    >
                        Update
                    </button>
                    <button
                        className="mt-2 px-4 py-2 bg-red-300 text-white rounded-lg"
                        onClick={ () => handleShowTransactions('debit') }
                    >
                        Show Transactions
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold mb-2">Total Expenses</h2>
                    <p className="text-2xl font-bold">${ totals.expenses }</p>
                    <button
                        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg"
                        onClick={ () => handleOpenModal('expenses') }
                    >
                        Update
                    </button>
                    <button
                        className="mt-2 px-4 py-2 bg-yellow-300 text-white rounded-lg"
                        onClick={ () => handleShowTransactions('expenses') }
                    >
                        Show Transactions
                    </button>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Financial Overview</h2>
                <ResponsiveContainer width="100%" height={ 350 }>
                    <LineChart data={ data }>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="credit" stroke="#8884d8" />
                        <Line type="monotone" dataKey="debit" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="expenses" stroke="#ffc658" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            { isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Update { modalType }</h2>
                        <input
                            type="number"
                            placeholder="Enter new value"
                            value={ value }
                            onChange={ (e) => setValue(e.target.value) }
                            className="w-full mb-4 p-2 border rounded-lg"
                        />
                        <input
                            type="date"
                            placeholder="Date"
                            value={ transactionDetails.date }
                            onChange={ (e) => setTransactionDetails({ ...transactionDetails, date: e.target.value }) }
                            className="w-full mb-4 p-2 border rounded-lg"
                        />
                        <input
                            type="time"
                            placeholder="Time"
                            value={ transactionDetails.time }
                            onChange={ (e) => setTransactionDetails({ ...transactionDetails, time: e.target.value }) }
                            className="w-full mb-4 p-2 border rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Client"
                            value={ transactionDetails.client }
                            onChange={ (e) => setTransactionDetails({ ...transactionDetails, client: e.target.value }) }
                            className="w-full mb-4 p-2 border rounded-lg"
                        />
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
                                onClick={ handleCloseModal }
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                onClick={ handleUpdateValue }
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            ) }
            { isTransactionModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
                        <h2 className="text-xl font-semibold mb-4">{ modalType } Transactions</h2>
                        <ul className="divide-y divide-gray-200">
                            { transactions.filter(t => t.type === modalType).map((transaction, index) => (
                                <li key={ index } className="py-4 flex justify-between">
                                    <div>
                                        <p className="text-lg font-semibold">{ transaction.client }</p>
                                        <p className="text-sm text-gray-500">{ transaction.date } { transaction.time }</p>
                                    </div>
                                    <p className="text-lg font-bold">${ transaction.value }</p>
                                </li>
                            )) }
                        </ul>
                        <div className="flex justify-end mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                                onClick={ handleCloseTransactionModal }
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default BusinessFinance;
