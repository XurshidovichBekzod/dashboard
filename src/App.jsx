import React, { lazy, Suspense } from 'react'
import { Routes, useRoutes } from 'react-router-dom'
import "./App.css"
const Home = lazy(() => import("./page/home/Home"))
const Dashboard = lazy(() => import("./page/dashboard/Dashboard"))
const Students = lazy(() => import("./page/dashboard/children/Students"))
const Courses = lazy(() => import("./page/dashboard/children/Courses"))
const Teachers = lazy(() => import("./page/dashboard/children/Teachers"))
const Payments  = lazy(() => import("./page/dashboard/children/Payments"))
const Groups  = lazy(() => import("./page/dashboard/children/Groups"))
const Attendance  = lazy(() => import("./page/dashboard/children/Attendance"))
const Reports = lazy(() => import("./page/dashboard/children/Reports"))
const Notifications = lazy(() => import("./page/dashboard/children/Notifications"))
const Schedule = lazy(() => import("./page/dashboard/children/Schedule"))
const Feedback = lazy(() => import("./page/dashboard/children/Feedback"))

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {
          useRoutes([
            {
              path: "/",
              element: <Home />,
              children: [
                {
                  path: "",
                  element: <Dashboard />,
                  children: [
                    {
                      index: true,
                      element: <Students />
                    },
                    {
                      path: "courses",
                      element: <Courses />
                    },
                    {
                      path: "teachers",
                      element: <Teachers />
                    },
                    {
                      path: "payments",
                      element: <Payments />
                    },
                    {
                      path: "groups",
                      element: <Groups />
                    },
                    {
                      path: "attendance",
                      element: <Attendance />
                    },
                    {
                      path: "reports",
                      element: <Reports/>
                    },
                    {
                      path: "notifications",
                      element: <Notifications/>
                    },
                    {
                      path: "feedback",
                      element: <Feedback/>
                    },
                    {
                      path: "schedule",
                      element: <Schedule/>
                    }
                  ]
                }
              ]
            }
          ])
        }
      </Suspense>

    </>
  )
}

export default App
