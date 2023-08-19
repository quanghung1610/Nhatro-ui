import { useRoutes } from "react-router-dom";
import Layout from "../layouts/common";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/login", element: <Login /> },
                { path: "/register", element: <Register />},
                { path: "/forgot", element: <ForgotPassword />}
            ]
        }
    ])
}

export default Router;