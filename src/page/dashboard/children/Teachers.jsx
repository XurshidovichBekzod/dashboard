import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Teachers = () => {
    return (
        <div>
            <div className='flex'>
                <NavLink to={""}>All Course</NavLink>
                <NavLink to={"newTeacher"}>New Course</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Teachers