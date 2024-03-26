import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Listed_Books from './components/Listed Books/Listed_Books';
import PagesToRead from './components/PagesToRead/PagesToRead';
import MostPopular from './components/MostPopular/MostPopular';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listedBooks',
        element:<Listed_Books></Listed_Books>,
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>,
      },
      {
        path:'/mostPopular',
        element: <MostPopular></MostPopular>,
      }
    ]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
