import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Favorite from './pages/Favorite';
import Profile from './pages/Profile';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/me',
        element: <Profile />
      }, {
        path: '/profiles/:profileId',
        element: <Profile />
      }, {
        path: '/favorites/',
        element: <Favorite />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
