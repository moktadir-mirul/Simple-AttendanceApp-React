import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RootRouter } from './Router/Router.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
      <RouterProvider router={RootRouter}/>
</Provider>
  
)
