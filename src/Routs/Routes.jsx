import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../layout/Home";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/resister',
            element:<Resister></Resister>
        },
      ]
    },
  ]);

  export default router;