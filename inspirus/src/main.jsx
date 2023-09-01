import React from 'react'
import ReactDOM from 'react-dom/client'

import LoadingPage from './pages/LoadingPage/main'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home/main'
import PlaySound from './components/playSound/app'





const router = createBrowserRouter([
  {
    path:"/",
    element:<LoadingPage/>
  },
  {
    path:"/Home",
    element:<Home/>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <PlaySound/>
    <RouterProvider router={router} />
  </React.StrictMode>
)





