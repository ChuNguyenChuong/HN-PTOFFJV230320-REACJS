import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoPage from './views/Todo/index.jsx';
import AboutPage from './views/About/index.jsx';
import HomePage from './views/Home/index.jsx';
// import DetailPage from './views/Detail/index.jsx';
import Readme from './components/ReadMe/index.jsx';
import Abc from './components/Abc/index.jsx';
import AdminView from './views/Admin/index.jsx';
import PrivatedRouter from './components/PrivateRouter/index.jsx';

const DetailPageLazyLoadingComponent = React.lazy(()=> import('./views/Detail/index.jsx'))

const router = createBrowserRouter([
  // định nghĩa 1 router
  {
    // đường dãn của router
    path: "/",
    // tên compoment render
    element: <App/>,
  },

  {
    path: "/admin",
    // PrivatedRouter là 1 component bảo vệ các router con khỏi quyền truy cập không hợp lệ
    element: <PrivatedRouter/>,
    // định nghĩa router con của path cha : /admin thông qua Outlet
    children : [  
      {
        path: "/admin",
        element: <AdminView/>,
      }
    ]
  },

  {
    path: "/todo",
    element: <TodoPage/>,
    children: [
      {
        path: "/todo/readme",
        element: <Readme/>,
      },
      {
        path: "/todo/abc",
        element: <Abc/>,
      },
    ]
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/detail/:id",
    element: <Suspense fallback={<div>loading</div>}>
          <DetailPageLazyLoadingComponent/>
    </Suspense>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
