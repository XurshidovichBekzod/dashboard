import React, { lazy, Suspense } from 'react'
import { Routes, useRoutes } from 'react-router-dom'
import "./App.css"
const Home = lazy(() => import("./page/home/Home"))
const Dashboard = lazy(() => import("./page/dashboard/Dashboard"))

const Students = lazy(() => import("./page/dashboard/children/Students"))
const AllStudents = lazy(() => import("./page/dashboard/child/students/AllStudents"))
const AddStudent = lazy(() => import("./page/dashboard/child/students/AddStudent"))



const Courses = lazy(() => import("./page/dashboard/children/Courses"))
const AllCourses = lazy(() => import("./page/dashboard/child/courses/AllCourse"))
const NewCourse = lazy(() => import("./page/dashboard/child/courses/NewCourse"))


const Teachers = lazy(() => import("./page/dashboard/children/Teachers"))
const AllTeacher = lazy(() => import("./page/dashboard/child/teacher/AllTeacher"))
const NewTeacher = lazy(() => import("./page/dashboard/child/teacher/NewTeacher"))


const Payments = lazy(() => import("./page/dashboard/children/Payments"))
const Groups = lazy(() => import("./page/dashboard/children/Groups"))
const Attendance = lazy(() => import("./page/dashboard/children/Attendance"))
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
                      path: "students",
                      element: <Students />,
                      children: [
                        {
                          index: true,
                          element: <AllStudents />
                        },
                        {
                          path: "add",
                          element: <AddStudent />
                        }
                      ]
                    },
                    {
                      path: "courses",
                      element: <Courses />,
                      children: [
                        {
                          index: true,
                          element: <AllCourses />
                        },
                        {
                          path: "new",
                          element: <NewCourse />
                        }
                      ]
                    },
                    {
                      path: "teachers",
                      element: <Teachers />,
                      children: [
                        {
                          index: true,
                          element: <AllTeacher />
                        },
                        {
                          path: "newTeacher",
                          element: <NewTeacher />
                        }
                      ]
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
                      element: <Reports />
                    },
                    {
                      path: "notifications",
                      element: <Notifications />
                    },
                    {
                      path: "feedback",
                      element: <Feedback />
                    },
                    {
                      path: "schedule",
                      element: <Schedule />
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
