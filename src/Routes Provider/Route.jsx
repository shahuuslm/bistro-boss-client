import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Layout/Pages/Home/Home";
import Menu from "../Layout/Pages/Menu/Menu";
import Shop from "../Layout/Pages/Shop/Shop";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      }
    ]


  },
]);

export default router