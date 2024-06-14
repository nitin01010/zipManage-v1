import React, { useState } from 'react';
import Dashboard from './UI/dashboard';
import Task from './UI/task';
import Profile from './UI/profile';

const Employee = () => {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const tabs = [
        { id: '1', label: 'Home', content: <Dashboard /> },
        { id: '2', label: 'Task', content: <Task /> },
        { id: '3', label: 'Profile', content: <Profile /> },
    ];

    return (
        <div className="flex flex-col lg:flex-row min-w-full min-h-screen max-w-screen-lg max-h-screen mx-auto bg-gray-100">
            <div className="flex flex-col w-full lg:w-1/5 bg-white p-4 border-r border-gray-300">
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

export default Employee;
