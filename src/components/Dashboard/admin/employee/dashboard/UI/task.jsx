import React, { useState } from 'react';

const Task = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'pending', createdBy: 'User A', createdAt: '2023-06-10', daysToComplete: 3 },
        { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'working', createdBy: 'User B', createdAt: '2023-06-11', daysToComplete: 5 },
        { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'done', createdBy: 'User C', createdAt: '2023-06-12', daysToComplete: 2 },
        // Add more dummy data as needed
    ]);

    const [selectedTask, setSelectedTask] = useState(null);

    const updateTaskStatus = (id, status) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, status } : task)));
    };

    const openTaskDetails = (task) => {
        setSelectedTask(task);
    };

    const closeTaskDetails = () => {
        setSelectedTask(null);
    };

    const renderTasks = (status) => (
        tasks.filter(task => task.status === status).map(task => (
            <div key={ task.id } className="p-4 bg-gray-100 rounded-lg shadow mb-4 cursor-pointer hover:bg-gray-200" onClick={ () => openTaskDetails(task) }>
                <div className="font-semibold">{ task.title }</div>
                <div className="text-sm text-gray-600">{ task.description }</div>
                <div className="flex justify-between mt-2">
                    <button onClick={ (e) => { e.stopPropagation(); updateTaskStatus(task.id, 'pending'); } } className="text-blue-500 hover:text-blue-700">Pending</button>
                    <button onClick={ (e) => { e.stopPropagation(); updateTaskStatus(task.id, 'working'); } } className="text-yellow-500 hover:text-yellow-700">Working</button>
                    <button onClick={ (e) => { e.stopPropagation(); updateTaskStatus(task.id, 'done'); } } className="text-green-500 hover:text-green-700">Done</button>
                </div>
            </div>
        ))
    );

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                    <button className="text-xl font-bold mb-4 focus:outline-none" disabled>Pending</button>
                    { renderTasks('pending') }
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                    <button className="text-xl font-bold mb-4 focus:outline-none" disabled>Working</button>
                    { renderTasks('working') }
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                    <button className="text-xl font-bold mb-4 focus:outline-none" disabled>Done</button>
                    { renderTasks('done') }
                </div>
            </div>

            { selectedTask && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
                        <h2 className="text-2xl font-bold mb-4">{ selectedTask.title }</h2>
                        <p className="mb-2"><strong>Description:</strong> { selectedTask.description }</p>
                        <p className="mb-2"><strong>Created by:</strong> { selectedTask.createdBy }</p>
                        <p className="mb-2"><strong>Created at:</strong> { selectedTask.createdAt }</p>
                        <p className="mb-2"><strong>Days to complete:</strong> { selectedTask.daysToComplete }</p>
                        <button onClick={ closeTaskDetails } className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">Close</button>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default Task;
