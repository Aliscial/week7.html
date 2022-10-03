import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/home';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Results from './routes/results';
import About from './routes/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/about", 
        element: <About/>,
      },
      {
        path: "/results", 
        element: <Results/>,
      },
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
