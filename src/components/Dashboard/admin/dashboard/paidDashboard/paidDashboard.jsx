import React, { useState } from 'react';
import AddEmployee from './UI/addEmployee';
import IdCard from './UI/idCard';
import Salary from './UI/salary';
import BusinessFinance from './UI/businessFinance';
import Client from './UI/client';

const PaidDashboard = () => {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const tabs = [
        { id: '1', label: 'Add Employee', content: <AddEmployee /> },
        { id: '3', label: 'Salary', content: <Salary /> },
        { id: '4', label: 'Business Finance', content: <BusinessFinance /> },
        { id: '5', label: 'Client', content: <Client /> },
        { id: '6', label: 'ID Card', content: <IdCard /> },
    ];

    return (
        <div className="flex min-w-full min-h-screen max-w-screen-lg max-h-screen mx-auto">
            <div className="flex flex-col w-1/5 bg-gray-100 p-4 border-r border-gray-300">
                { tabs.map((tab) => (
                    <button
                        key={ tab.id }
                        className={ `p-3 my-2 rounded-lg transition-colors duration-300 ${activeTab === tab.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-blue-600 hover:bg-blue-200'
                            }` }
                        onClick={ () => handleTabChange(tab.id) }
                    >
                        { tab.label }
                    </button>
                )) }
            </div>
            <div className="flex-1 p-6 bg-gray-50">
                { tabs.find((tab) => tab.id === activeTab)?.content }
            </div>
        </div>
    );
};

export default PaidDashboard;
