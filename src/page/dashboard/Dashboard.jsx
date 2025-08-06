import React from 'react'
import "./Dashboard.css"
import Header from '../../components/header/Header'
import { NavLink, Outlet } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='sidebar'>
                <h1>IT Academy</h1>
                <ul className='collection'>
                    <li>
                        <NavLink className={'sidebarLink'} to={""}>Students</NavLink>
                    </li>
                    <li >
                        <NavLink className={'sidebarLink'} to={"courses"}>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"teachers"}>Teacher</NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"payments"}>Payments</NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"groups"}>Groups</NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"attendance"}>Attendance</NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"reports"}>Reports</NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"notifications"}>Notifications</NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"feedback"}>Feedback </NavLink>
                    </li>
                    <li>
                        <NavLink className={'sidebarLink'} to={"schedule"}>Schedule</NavLink>
                    </li>
                </ul>
            </div>
            <div className='content'>
                <Header />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard