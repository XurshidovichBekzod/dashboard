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
                        <NavLink to={""}>Students</NavLink>
                    </li>
                    <li>
                        <NavLink to={"courses"}>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to={"teachers"}>Teacher</NavLink>
                    </li>
                    <li>
                        <NavLink to={"payments"}>Payments</NavLink>
                    </li>
                    <li>
                        <NavLink to={"groups"}>Groups</NavLink>
                    </li>
                    <li>
                        <NavLink to={"attendance"}>Attendance</NavLink>
                    </li>   
                    <li>
                        <NavLink to={"reports"}>Reports</NavLink>
                    </li>
                    <li>
                        <NavLink to={"notifications "}>Notifications</NavLink>
                    </li>
                    <li>
                        <NavLink to={"feedback"}>Feedback </NavLink>
                    </li>
                    <li>
                        <NavLink to={"schedule"}>Schedule</NavLink>
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