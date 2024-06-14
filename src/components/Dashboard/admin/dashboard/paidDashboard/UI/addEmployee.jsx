import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890', gender: 'Male', joinedDate: '2021-01-15', position: 'Software Engineer', department: 'Engineering', salary: '10,000', status: 'Active', role: 'Employee' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0987654321', gender: 'Female', joinedDate: '2020-03-22', position: 'Product Manager', department: 'Product', salary: '10,000', status: 'Active', role: 'Admin' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        joinedDate: '',
        position: '',
        department: '',
        salary: '10,000',
        status: 'Active',
        role: 'Employee'
    });
    const [errors, setErrors] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({
            ...newEmployee,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = newEmployee.name ? '' : 'Name is required';
        tempErrors.email = newEmployee.email ? '' : 'Email is required';
        tempErrors.phone = newEmployee.phone ? '' : 'Phone is required';
        tempErrors.gender = newEmployee.gender ? '' : 'Gender is required';
        tempErrors.joinedDate = newEmployee.joinedDate ? '' : 'Joined Date is required';
        tempErrors.position = newEmployee.position ? '' : 'Position is required';
        tempErrors.department = newEmployee.department ? '' : 'Department is required';
        tempErrors.role = newEmployee.role ? '' : 'Role is required';
        tempErrors.salary = newEmployee.salary ? '' : 'Salary is required';
        tempErrors.status = newEmployee.status ? '' : 'Status is required';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleAddEmployee = () => {
        if (validate()) {
            if (isEditing) {
                const updatedEmployees = [...employees];
                updatedEmployees[editIndex] = { ...newEmployee, id: employees[editIndex].id };
                setEmployees(updatedEmployees);
                toast.success('Employee updated successfully!');
            } else {
                setEmployees([
                    ...employees,
                    { id: employees.length + 1, ...newEmployee }
                ]);
                toast.success('Employee added successfully!');
            }
            setIsModalOpen(false);
            setNewEmployee({ name: '', email: '', phone: '', gender: '', joinedDate: '', position: '', department: '', salary: '10,000', status: 'Active', role: 'Employee' });
            setIsEditing(false);
            setEditIndex(null);
        }
    };

    const handleEditEmployee = (index) => {
        setNewEmployee(employees[index]);
        setIsEditing(true);
        setEditIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <ToastContainer />
            <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
            <button
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={ () => setIsModalOpen(true) }
            >
                Add Employee
            </button>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Name</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Email</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Phone</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Gender</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Joined Date</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Position</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Department</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Salary</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Role</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { employees.map((employee, index) => (
                            <tr key={ employee.id } className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.name }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.email }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.phone }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.gender }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.joinedDate }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.position }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.department }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.salary }</td>
                                <td className="py-2 px-4 border-b border-gray-200">{ employee.role }</td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <button
                                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2"
                                        onClick={ () => handleEditEmployee(index) }
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
            { isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">{ isEditing ? 'Edit Employee' : 'Add New Employee' }</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={ newEmployee.name }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        />
                        { errors.name && <div className="text-red-500 text-sm mb-2">{ errors.name }</div> }
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={ newEmployee.email }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        />
                        { errors.email && <div className="text-red-500 text-sm mb-2">{ errors.email }</div> }
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={ newEmployee.phone }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        />
                        { errors.phone && <div className="text-red-500 text-sm mb-2">{ errors.phone }</div> }
                        <select
                            name="gender"
                            value={ newEmployee.gender }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        { errors.gender && <div className="text-red-500 text-sm mb-2">{ errors.gender }</div> }
                        <input
                            type="date"
                            name="joinedDate"
                            placeholder="Joined Date"
                            value={ newEmployee.joinedDate }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        />
                        { errors.joinedDate && <div className="text-red-500 text-sm mb-2">{ errors.joinedDate }</div> }
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={ newEmployee.position }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        />
                        { errors.position && <div className="text-red-500 text-sm mb-2">{ errors.position }</div> }
                        <input
                            type="text"
                            name="department"
                            placeholder="Department"
                            value={ newEmployee.department }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        />
                        { errors.department && <div className="text-red-500 text-sm mb-2">{ errors.department }</div> }
                        <input
                            type="text"
                            name="salary"
                            placeholder="Salary"
                            value={ newEmployee.salary }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        />
                        { errors.salary && <div className="text-red-500 text-sm mb-2">{ errors.salary }</div> }
                        <select
                            name="status"
                            value={ newEmployee.status }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        { errors.status && <div className="text-red-500 text-sm mb-2">{ errors.status }</div> }
                        <select
                            name="role"
                            value={ newEmployee.role }
                            onChange={ handleInputChange }
                            className="w-full mb-2 p-2 border rounded-lg"
                        >
                            <option value="Employee">Employee</option>
                            <option value="Admin">Admin</option>
                        </select>
                        { errors.role && <div className="text-red-500 text-sm mb-2">{ errors.role }</div> }
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
                                onClick={ () => {
                                    setIsModalOpen(false);
                                    setIsEditing(false);
                                    setEditIndex(null);
                                    setNewEmployee({ name: '', email: '', phone: '', gender: '', joinedDate: '', position: '', department: '', salary: '10,000', status: 'Active', role: 'Employee' });
                                    setErrors({});
                                } }
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                onClick={ handleAddEmployee }
                            >
                                { isEditing ? 'Update' : 'Add' }
                            </button>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default AddEmployee;
