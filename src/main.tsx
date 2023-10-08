import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExerciseList } from "./pages/ExerciseList.tsx";
import { Laboratory } from "./pages/Laboratory.tsx";
import {ModuleList} from "./pages/ModuleList.tsx";
import {Topic} from "./pages/Topic.tsx";
import {NotFound} from "./components/NotFoundRoute.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ModuleList/>
            },
            {
                path: "exercises",
                element: <ExerciseList/>
            },
            {
                path: "lab/:id",
                element: <Laboratory/>
            },
            {
                path: "topic/:id",
                element: <Topic/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
