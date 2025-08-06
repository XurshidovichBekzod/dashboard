import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Groups = () => {
    return (
        <div>
            <div className='flex'>
                <NavLink to={""}>All Groups</NavLink>
                <NavLink to={"group"}>Create Groups</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Groups