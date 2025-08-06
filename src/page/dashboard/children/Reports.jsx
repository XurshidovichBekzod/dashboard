import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Reports = () => {
    return (
        <div>
            <div className='flex'>
                <NavLink to={""}>Remove Reports </NavLink>
                <NavLink to={"reports"}>Set Reports</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Reports