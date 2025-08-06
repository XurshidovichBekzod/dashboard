import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Schedule = () => {
  return (
    <div>
        <div className='flex'>
            <NavLink to={""}>Weekly Schedule</NavLink>
            <NavLink to={"schedules"}>Exam Schedule </NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Schedule