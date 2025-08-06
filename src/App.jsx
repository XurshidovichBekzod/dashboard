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
const AllPayment = lazy(() => import("./page/dashboard/child/payments/AllPayment"))
const NewPayment = lazy(() => import("./page/dashboard/child/payments/NewPayment"))


const Groups = lazy(() => import("./page/dashboard/children/Groups"))
const AddGroups = lazy(() => import("./page/dashboard/child/groups/AddGroups"))
const AllGroups = lazy(() => import("./page/dashboard/child/groups/AllGroups"))


const Attendance = lazy(() => import("./page/dashboard/children/Attendance"))
const AddAttendance = lazy(() => import("./page/dashboard/child/attendance/AddAttendance"))
const AllAttendance = lazy(() => import("./page/dashboard/child/attendance/AllAttendance"))



const Reports = lazy(() => import("./page/dashboard/children/Reports"))
const RemoveReports = lazy(() => import("./page/dashboard/child/reports/RemoveReports"))
const SetReports = lazy(() => import("./page/dashboard/child/reports/SetReports"))


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
                      element: <Payments />,
                      children: [
                        {
                          index: true,
                          element: <AllPayment />
                        },
                        {
                          path: "payment",
                          element: <NewPayment />
                        }
                      ]
                    },
                    {
                      path: "groups",
                      element: <Groups />,
                      children: [
                        {
                          index: true,
                          element: <AllGroups />
                        },
                        {
                          path: "group",
                          element: <AddGroups />
                        }
                      ]
                    },
                    {
                      path: "attendance",
                      element: <Attendance />,
                      children: [
                        {
                          index: true,
                          element: <AllAttendance />
                        },
                        {
                          path: "attendance",
                          element: <AddAttendance />
                        }
                      ]
                    },
                    {
                      path: "reports",
                      element: <Reports />,
                      children: [
                        {
                          index: true,
                          element: <RemoveReports />
                        },
                        {
                          path: "reports",
                          element: <SetReports />
                        }
                      ]
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
