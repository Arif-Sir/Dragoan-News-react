import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../layout/Home";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch('/news.json')
        },
        {
          path: '/news/:id',
          element: <PrivetRoutes><NewsDetails></NewsDetails></PrivetRoutes>
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