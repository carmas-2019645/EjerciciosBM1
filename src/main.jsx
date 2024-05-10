import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoList } from './Components/TodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
