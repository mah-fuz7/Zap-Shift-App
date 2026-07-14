import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/error/Error";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/Signin";
import Coverage from "../Pages/Home/Coverage/Coverage";
import Rider from "../Pages/Rider";
import AboutUs from "../Pages/AboutUs";
import SendParcelForm from "../Pages/SendParcelForm";
import DashBordLayout from "../Layouts/DashBordLayout";
import Dashbord from "../Pages/Dashboard.jsx/Dashbord";
import MyParcel from "../Pages/Dashboard.jsx/MyParcel";
import PaymentHistory from "../Pages/Dashboard.jsx/PaymentHistory";
import CompletedDeliveries from "../Pages/Dashboard.jsx/CompletedDeliveries";
import AssignedDeliveries from "../Pages/Dashboard.jsx/AssignedDeliveries";

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
      {
        path:'/coverage',
        element:<Coverage></Coverage>,
      loader:()=>fetch('../../public/warehouses.json').then(res=>res.json())
        
      },
      {
        path:'/rider',
        element:<Rider></Rider>,
        
      },
      {
        path:'/aboutus',
        element:<AboutUs></AboutUs>,
        
      },
      {
        path:'/sendparcel',
        element:<SendParcelForm></SendParcelForm>,
        loader:()=>fetch("../../public/warehouses.json").then(res=>res.json())
        
      },
     
      

    ]
    
  },
  {
path:"/dashboard",
element:<DashBordLayout></DashBordLayout>,
children:[
  {
    index:true,
    element:<Dashbord></Dashbord>
  },
  {
    path:'my-parcels',
    element:<MyParcel></MyParcel>
  },
  {
    path:'payment-history',
    element:<PaymentHistory></PaymentHistory>
  },
  {
    path:'completed-deliveries',
    element:<CompletedDeliveries></CompletedDeliveries>
  },
  {
    path:'assigned-deliveries',
    element:<AssignedDeliveries></AssignedDeliveries>
  },
  {
    path:'coverage',
    element:<Coverage></Coverage>
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