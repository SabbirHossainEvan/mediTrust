import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter([
    {
        index: true,
        element: <Home />
    }
])

export default router