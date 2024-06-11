import React from 'react'
import AdminSignup from './pages/adminSignup'
import SelectPlan from './pages/selectPlan'

const AdminDashboard = () => {
    return (
        <div className=' p-5'>
            <AdminSignup />
            <SelectPlan />
        </div>
    )
}

export default AdminDashboard