import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser";
import Home from "../components/Home";
import Update from "../components/Update";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/users/add',
                element: <AddUser></AddUser>
            },
            {
                path: '/update',
                element: <Update></Update>
            }
        ]
    }
])