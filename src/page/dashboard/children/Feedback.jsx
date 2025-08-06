import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Feedback = () => {
  return (
     <div>
        <div className='flex'>
            <NavLink to={""}>See Feedback</NavLink>
            <NavLink to={"feedback"}>Cheak Feedback</NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Feedback