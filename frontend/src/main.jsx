import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import SignIn from './pages/SignIn.jsx';
import Send from './pages/Send.jsx';
import Users from './components/Users.jsx';
import Transactions from './components/Transactions.jsx';
import Test from './pages/Test.jsx';

const router = createBrowserRouter([
 {
  path:"/" , element : <SignUp />
 },
  {
    path:"/signup" , element: <SignUp />
  },
  {
    path:"/signin" , element: <SignIn />
  },
  {
    path:"/dashboard" , element: <Dashboard />,
    children:[{
      path:"users" ,element: <Users />
    },{
      path:"transactions" ,element: <Transactions />
    }]
  },
  {
    path:"/send" , element: <Send />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} >
    <App />
  </RouterProvider>
  </React.StrictMode>,
)
