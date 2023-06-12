import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LayoutComponent from './components/Layout';
import './index.css';
import HomeAdminPage from './views/Admin/Home/index.jsx';
import HomeUserPage from './views/User/Home';
import TodosComponents from './views/User/Todos';
import DetailTodo from './views/User/DetailTodo';

const router = createBrowserRouter([
  {
    // định nghĩa url  
    path: "/",
    // render component theo url
    element: <LayoutComponent/>,
    children: [
      {
        path: "/admin",
        element: <HomeAdminPage />,
      },
      {
        path: "/user",
        element: <HomeUserPage />,
      },
      {
        path: "/user/todos",
        element: <TodosComponents />,
      },
      {
        path: "/user/todos/:id",
        element: <DetailTodo />,
      },
    ]
  },
  {
    path: "login",
    element: <div>login page</div>,

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
