import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import First from './Components/First/First.jsx';
import Friends from './Components/Friends/Friends.jsx';
import FriendDtail from './Components/FriendDtail/FriendDtail';
import Posts from './Components/Posts/Posts.jsx';
import PostDetail from './Components/PostDetail/PostDetail.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDtail></FriendDtail>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <div>404</div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
