import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Meals from './pages/Meals.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },{
        path: "/meals",
        element: <Meals />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
