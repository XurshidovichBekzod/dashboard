import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Attendance = () => {
  return (
     <div>
        <div className='flex'>
            <NavLink to={""}>View Attendance </NavLink>
            <NavLink to={"attendance"}>Mark Attendance</NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Attendance