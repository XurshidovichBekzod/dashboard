import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Students = () => {
    return (
        <div>
            <div className='flex'>
                <NavLink to="" end>All Students</NavLink>
                <NavLink to="add">Add Student</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Students
