import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <div className='flex'>
            <NavLink to={""}>All Course</NavLink>
            <NavLink to={"new"}>New Course</NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Courses