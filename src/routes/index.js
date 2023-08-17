import { useRoutes } from "react-router-dom";
import Layout from "../layouts/common";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/login", element: <Login /> }
            ]
        }
    ])
}

export default Router;