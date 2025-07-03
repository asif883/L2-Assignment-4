import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePage/Home";
import Books from "../Pages/AllBooks/Books";
import AddBook from "../Pages/AddBooks/AddBook";

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
            },
            {
                path: '/create-book',
                element: <AddBook/>
            }
        ]
    }
]);


export default router; 