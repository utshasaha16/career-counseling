import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import MyProfile from "../components/MyProfile/MyProfile";
import ErrorPage from "../components/ErrorPage/ErrorPage";




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
                element: <MyProfile></MyProfile>
            }
        ]
    }
])

export default router