import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutComponent from './components/Layout/index.jsx';
import UserAdmin from './components/users/index.jsx';
import RootAdmin from './components/RootAdmin/index.jsx';
import DetailUserAdmin from './components/DetailUserAdmin/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <LayoutComponent />,
    children: [
      {
        path: "/admin",
        element: <RootAdmin />,
      },
      {
        path: "/admin/users",
        element: <UserAdmin />,
      },
      {
        path: "/admin/users/:id",
        element: <DetailUserAdmin />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
