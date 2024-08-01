import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import signin from 'auth/sign-in.jsx'
import Signpage from './auth/Signpage.jsx'
import Home from './Home/Home.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './Dashboard/resume/[resumeId]/edit/EditResume.jsx'
import ViewResume from './my-resume/[resumeId]/view/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element:<App/>,
    path:'/',
    children:[
      {
        path :'',
        element:<Home/>
      },
      {
        path :'dashboard',
        element:<Dashboard/>
      },
      {
        path:'dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      }
    ]

  },
  {
path:"auth/sign-in",
element:<Signpage/>
  },
  {
  path:'/myresume/:resumeId/view',
  element:<ViewResume/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>,
)
