import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './Components/Header/TodoList'
import TaskList from './Components/Body/TaskList'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
    <TaskList />
  </React.StrictMode>,
)
