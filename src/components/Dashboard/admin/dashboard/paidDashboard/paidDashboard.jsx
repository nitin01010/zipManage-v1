import React from 'react'
import AddEmployee from './UI/addEmployee'
import IdCard from './UI/idCard'
import Salary from './UI/salary'
import BusinessFinance from './UI/businessFinance'

const PaidDashboard = () => {
    return (
        <div className=' p-5'>
            PaidDashboard
            <AddEmployee />
            <IdCard />
            <Salary />
            <BusinessFinance />
        </div>
    )
}

export default PaidDashboard