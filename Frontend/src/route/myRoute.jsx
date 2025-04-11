import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from "../App"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import FutureScope from '../pages/FutureScope'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import ProfilePage from '../pages/ProfilePage'
import Attendance from '../pages/Attendance'
import TeacherViewAttendance from '../pages/TeacherViewAttendance'

export const myRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/about",
                element:<AboutPage/>
            },
            {
                path:"/contact",
                element:<ContactPage/>
            },
            {
                path:"/future-scope",
                element:<FutureScope/>
            }
            ,{
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/profile",
                element:<ProfilePage/>
            },
            {
                path:"/attendance",
                element:<Attendance/>
            },
            {
                path:"/view-attendance",
                element:<TeacherViewAttendance/>
            }
        ]
    }
]);