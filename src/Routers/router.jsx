import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import MyProfile from "../components/MyProfile/MyProfile";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AuthLayout from "../AuthLayout/AuthLayout";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                
                loader: () => fetch("/careerCounseling.json")
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/myProfile",
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/logIn",
                element: <LogIn></LogIn>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/serviceDetails/:id",
        element: <PrivateRoute>
            <ServiceDetails></ServiceDetails>
        </PrivateRoute>,
        loader:async ({params}) => {
            const res = await fetch("/careerCounseling.json")
            const data = await res.json()
            const singleData = data.find(d => d.id == params.id)
            return singleData
        }
    }
])

export default router