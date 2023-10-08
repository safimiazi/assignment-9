import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Ragister/Register.jsx';
import Services from './Components/Services/Services.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Details from './Pages/Details/Details.jsx';
import Gallery from './Pages/Gallery/Gallery.jsx';
import Event from './Pages/Event/Event.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx';
import Profile from './Pages/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/event",
        element: <Event></Event>,
        loader: () => fetch("/public/data.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: () => fetch("/public/data.json")
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
