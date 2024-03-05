import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/HomePage/Home/Home"
import MainLayout from "../layouts/MainLayout"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"

const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <div>Error...</div>,
      children: [
         {
            index: true,
            element: <Home />
         }
      ]
   },
   {
      path: "login",
      element: <Login />
   },
   {
      path: "signup",
      element: <Signup />
   },
])

export default routes;