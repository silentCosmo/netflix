import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import NavPage from './Pages/NavPage';
import Home from './Pages/Home';
import Search from './Pages/Search';
import ErrorPage from './Pages/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<div><App/></div>,
    errorElement: <div><ErrorPage/></div>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
       path:"/tv-shows",
       element: <NavPage headline = "TV Shows"/>
      },
      {
        path:"/movies",
        element: <NavPage headline = "Movies" Movie />
       },
       {
        path:"/recently-added",
        element: <NavPage headline = "Recently Added"/>
       },
       {
        path:"/my-list",
        element: <NavPage headline = "My List"/>
       },
       {
        path:"/search",
        element: <div> <Search/> </div>
       },
      {
        path:"/error",
        element:<ErrorPage></ErrorPage>
      }
    ]
  
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
