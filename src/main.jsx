import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RootRouter } from './Router/Router.jsx'
import { Provider } from 'react-redux'
import { Store } from './Store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={Store}>
      <RouterProvider router={RootRouter}/>
</Provider>
  
)
