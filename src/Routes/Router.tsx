import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePage/Home";
import Books from "../Pages/AllBooks/Books";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/all-books',
                element: <Books/>
            }
        ]
    }
]);


export default router; 