import React from 'react'
import SelectPlan from './pages/selectPlan'
import AdminSignup from '../dashboard/pages/adminSignup';

const AdminDashboard = () => {
    return (
        <div className=' p-5'>
            <AdminSignup />
            {/* <SelectPlan /> */ }
        </div>
    )
}

export default AdminDashboard