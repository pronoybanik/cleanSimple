import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Register from "../Components/Register/Register";
import Listing from "../Components/Listing/Listing";
import DashBoardLayer from "../LayOut/DashBoardLayer";
import PrivateRouter from "./PrivateRouter";
import FrontPage from "../Components/FrontPage/FrontPage";

const allRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<FrontPage></FrontPage>
            },
            {
                path: '/login',
                element: <Register></Register>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashBoardLayer></DashBoardLayer></PrivateRouter>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/listing',
                element: <Listing></Listing>
            }


        ]
    }

]);

export default allRouter;