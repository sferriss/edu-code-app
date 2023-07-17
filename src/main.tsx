import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Exercise } from "./pages/Exercise";
import { Compiler } from "./pages/Compiler";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Exercise/>
            },
            {
                path: "compiler",
                element: <Compiler/>
            },
            {
                path: "compiler/:id",
                element: <Compiler/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
