import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

import Medicine from "../pages/Medicine";
import Doctors from "../pages/Doctors";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import About from "../pages/About";

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
])

export default router