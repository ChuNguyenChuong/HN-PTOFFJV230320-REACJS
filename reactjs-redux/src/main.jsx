// import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App.jsx'
import LayoutAdmin from './components/LayoutAdmin/index.jsx'
import './index.css'
import store from './redux/store.js'
import BooksView from './views/books/index.jsx'
import LoginPage from './views/Login/index.jsx'
import PostsView from './views/posts/index.jsx'
import TodoView from './views/Todo/index.jsx'
import UserDetail from './views/UserDetail/index.jsx'
import UserManagement from './views/UserManagement/index.jsx'
import UserView from './views/users/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserView></UserView>,
  },
  {
    path: "/books",
    element: <BooksView></BooksView>,
  },
  {
    path: "/posts",
    element: <PostsView />
  },
  {
    path: "/todos",
    element: <TodoView />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/admin",
    element: <LayoutAdmin></LayoutAdmin>,
    children: [
      {
        path: "",
        element: <UserManagement />
      },
      {
        path: "/admin/users/:id",
        element: <UserDetail />
      },


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
)
