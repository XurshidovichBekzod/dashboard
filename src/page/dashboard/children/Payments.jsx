import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Payments = () => {
  return (
     <div>
        <div className='flex'>
            <NavLink to={""}>Payment History</NavLink>
            <NavLink to={"payment"}>Add Payment</NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Payments