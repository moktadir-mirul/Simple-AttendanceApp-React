import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RootRouter } from './Router/Router.jsx'
import { ShopProvider } from './Context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopProvider>
    <RouterProvider router={RootRouter}/>
  </ShopProvider>
  
)
