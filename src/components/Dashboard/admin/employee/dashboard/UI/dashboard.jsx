import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const { id } = useParams();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    };

    return (
        <div className="    p-6 flex flex-col items-center bg-gray-100">
            <div className="bg-white shadow-lg w-[100%] rounded-lg p-8 max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">Welcome, { id }!</h1>
                <div className="text-xl text-center text-gray-700">
                    Current Time: <span className="font-mono text-4xl block mt-2">{ formatTime(time) }</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
