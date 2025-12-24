import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

import Medicine from "../pages/Medicine";
import Doctors from "../pages/Doctors";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Login from "../components/Login";
import LoginPages from "../pages/LoginPages";
import RegisterPage from "../pages/RegisterPage";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
    {
        index: true,
        element: <Home />
    },
    {
        path: "medicine",
        element: <Medicine />
    },
    {
        path: "doctors",
        element: <Doctors />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path: "login",
        element: <LoginPages />
    },
    {
        path: "register",
        element: <RegisterPage />
    },
    {
        path: "checkout",
        element: <CheckoutPage />
    },
])

export default router