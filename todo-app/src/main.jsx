import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HeaderComponent from './components/Header';
import './index.css';
import HomePage from './views/Home';
import TodoPage from './views/Todos';
import UserPage from './views/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderComponent></HeaderComponent>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/todos",
        element: <TodoPage></TodoPage>,
      },
      {
        path: "/users",
        element: <UserPage></UserPage>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
