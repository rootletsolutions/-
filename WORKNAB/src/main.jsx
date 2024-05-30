import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Aboutus from './Components/Aboutus.jsx'
import Feature from './Components/Feature.jsx'
import Availablejobs from './Components/Avialablejobs.jsx'
import Wherewework from './Components/Wherewework.jsx'
import Glazier from './Components/Glazier.jsx'
import Generallabour from './Components/Generallabour.jsx'
import Postjobwithme from './Components/Postjobwithme.jsx'
import Workwithme from './Components/Workwithme.jsx'
import Seeyourcart from './Components/Seeyourcart.jsx'
import Checkavailiability from './Components/Checkavailiability.jsx'
import Thankyou from './Components/Thankyou.jsx'
import Intro1 from './imgaepages/Intro1.jsx'
import Intro2 from './imgaepages/Intro2.jsx'
import Maintainclientprofile from './Components/Maintainclientprofile.jsx'
import Maintainsubcontractor from './Components/Managesubcontracter.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aboutus",
    element: <Aboutus />,
  },
  {
    path: "feature",
    element: <Feature />,
  },
  {
    path: "availablejobs",
    element: <Availablejobs />,
  },
  {
    path: "wherewework",
    element: <Wherewework />,
  },
  {
    path: "glazier",
    element: <Glazier />,
  },
  {
    path: "generallabour",
    element: <Generallabour/>,
  },
  {
    path: "postjobwithme",
    element: <Postjobwithme/>,
  },
  {
    path: "workwithme",
    element: <Workwithme/>,
  },
  {
    path: "seeyourcart",
    element: <Seeyourcart/>,
  },
  {
    path: "checkavailiability",
    element: <Checkavailiability/>,
  },
  {
    path: "thankyou",
    element: <Thankyou/>,
  },
  {
    path:"intro1",
    element:<Intro1/>
  },
  {
    path:"intro2",
    element:<Intro2/>
  },
  {
    path:"maintainclientprofile",
    element:<Maintainclientprofile/>
  },
  {
    path:"maintainsubcontracter",
    element:<Maintainsubcontractor/>
  },
  {
    path:"home",
    element:<Home/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

