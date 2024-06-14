import React, { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import 'tailwindcss/tailwind.css';

const data = [
    { name: 'Jan', growth: 20 },
    { name: 'Feb', growth: 15 },
    { name: 'Mar', growth: 30 },
    { name: 'Apr', growth: 25 },
    { name: 'May', growth: 10 },
    { name: 'Jun', growth: 20 },
    { name: 'Jul', growth: 35 },
];

const Client = () => {
    const [isClientModalOpen, setIsClientModalOpen] = useState(false);
    const [clients, setClients] = useState([]);
    const [clientDetails, setClientDetails] = useState({ name: '', status: 'pending' });
    const [totals, setTotals] = useState({
        totalClients: 0,
        ownClients: 0,
        pendingClients: 0,
    });

    const handleOpenClientModal = () => {
        setIsClientModalOpen(true);
    };

    const handleCloseClientModal = () => {
        setIsClientModalOpen(false);
        setClientDetails({ name: '', status: 'pending' });
    };

    const handleAddClient = () => {
        const newClient = { ...clientDetails };
        setClients([...clients, newClient]);
        setTotals({
            ...totals,
            totalClients: totals.totalClients + 1,
            ownClients: newClient.status === 'own' ? totals.ownClients + 1 : totals.ownClients,
            pendingClients: newClient.status === 'pending' ? totals.pendingClients + 1 : totals.pendingClients,
        });
        handleCloseClientModal();
    };

    const handleUpdateClientStatus = (index, newStatus) => {
        const updatedClients = [...clients];
        const oldStatus = updatedClients[index].status;
        updatedClients[index].status = newStatus;
        setClients(updatedClients);
        setTotals({
            ...totals,
            ownClients: newStatus === 'own' ? totals.ownClients + 1 : totals.ownClients - 1,
            pendingClients: newStatus === 'pending' ? totals.pendingClients + 1 : totals.pendingClients - 1,
        });
    };

    return (
        <div className="p-6 bg-gray-100 ">
            <h1 className="text-3xl font-bold mb-6 text-center">Client Management Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold mb-2">Total Clients</h2>
                    <p className="text-2xl font-bold">{ totals.totalClients }</p>
                    <button
                        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
                        onClick={ handleOpenClientModal }
                    >
                        Add Client
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold mb-2">Own Clients</h2>
                    <p className="text-2xl font-bold">{ totals.ownClients }</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold mb-2">Pending Clients</h2>
                    <p className="text-2xl font-bold">{ totals.pendingClients }</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold mb-4">Monthly Growth</h2>
                <ResponsiveContainer width="100%" height={ 200 }>
                    <BarChart data={ data }>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="growth" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Client List</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clients.map((client, index) => (
                            <tr key={ index }>
                                <td className="py-2 px-4 border-b">{ client.name }</td>
                                <td className="py-2 px-4 border-b">{ client.status }</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                                        onClick={ () => handleUpdateClientStatus(index, 'own') }
                                    >
                                        Mark as Own
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                                        onClick={ () => handleUpdateClientStatus(index, 'pending') }
                                    >
                                        Mark as Pending
                                    </button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
            { isClientModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Add New Client</h2>
                        <input
                            type="text"
                            placeholder="Client Name"
                            value={ clientDetails.name }
                            onChange={ (e) => setClientDetails({ ...clientDetails, name: e.target.value }) }
                            className="w-full mb-4 p-2 border rounded-lg"
                        />
                        <select
                            value={ clientDetails.status }
                            onChange={ (e) => setClientDetails({ ...clientDetails, status: e.target.value }) }
                            className="w-full mb-4 p-2 border rounded-lg"
                        >
                            <option value="pending">Pending</option>
                            <option value="own">Own</option>
                        </select>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
                                onClick={ handleCloseClientModal }
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                                onClick={ handleAddClient }
                            >
                                Add Client
                            </button>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default Client;
