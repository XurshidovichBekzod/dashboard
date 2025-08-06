import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Notifications = () => {
    return (
        <div>
            <div className='flex'>
                <NavLink to={""}>See Feedback</NavLink>
                <NavLink to={"more"}>Cheak Feedback</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Notifications