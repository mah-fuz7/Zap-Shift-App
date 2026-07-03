import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/error/Error";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
     
      

    ]
    
  },
   {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
       path:'/signin',
        element:<SignIn></SignIn>
      },
  
]);
export default router