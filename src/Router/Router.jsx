import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/error/Error";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/Signin";
import Coverage from "../Pages/Coverage/Coverage";
import Rider from "../Pages/Rider";
import AboutUs from "../Pages/AboutUs";
import SendParcelForm from "../Pages/SendParcelForm";
import DashBordLayout from "../Layouts/DashBordLayout";
import Dashbord from "../Pages/Dashboard/Dashbord";
import MyParcel from "../Pages/Dashboard/MyParcel";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries";
import AssignedDeliveries from "../Pages/Dashboard/AssignedDeliveries";
import TrackOrder from "../Pages/TrackOrder";
import Pricing from "../Pages/Pricing";

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
        path:'/trackorder',
        element:<TrackOrder></TrackOrder>,
        
      },
      {
        path:'/pricing',
        element:<Pricing></Pricing>,
        
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
       path:'/login',
        element:<SignIn></SignIn>
      },
  
]);
export default router