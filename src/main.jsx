import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentComponentFunction from './Context/ContextAPI.jsx'
import App2 from './App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StudentComponentFunction>
    <App2 />
  </ StudentComponentFunction>
)
