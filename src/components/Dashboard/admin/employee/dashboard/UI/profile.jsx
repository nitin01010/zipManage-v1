import React from 'react';

const logo = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Profile = () => {
    // Define the employee object directly within the component
    const employee = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        gender: 'Male',
        joinedDate: '2021-01-15',
        position: 'Software Engineer',
        department: 'Engineering',
        salary: '10,000',
        status: 'Active',
        role: 'Employee'
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-center mb-6">
                <img src={ logo } alt="Logo" className="w-32 h-32 rounded-full" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Name:</strong>
                    <p>{ employee.name }</p>
                </div>
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Email:</strong>
                    <p>{ employee.email }</p>
                </div>
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Phone:</strong>
                    <p>{ employee.phone }</p>
                </div>
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Gender:</strong>
                    <p>{ employee.gender }</p>
                </div>
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Joined Date:</strong>
                    <p>{ employee.joinedDate }</p>
                </div>
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Position:</strong>
                    <p>{ employee.position }</p>
                </div>
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Department:</strong>
                    <p>{ employee.department }</p>
                </div>
                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Salary:</strong>
                    <p>{ employee.salary }</p>
                </div>

                <div className="bg-white hover:bg-blue-100 py-3 px-4 rounded-md border">
                    <strong className="block mb-2">Role:</strong>
                    <p>{ employee.role }</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
