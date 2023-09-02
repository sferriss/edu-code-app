import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExerciseList } from "./pages/ExerciseList.tsx";
import { ExerciseLab } from "./pages/ExerciseLab.tsx";
import {ModuleList} from "./pages/ModuleList.tsx";
import {Topic} from "./pages/Topic.tsx";

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
                path: "lab",
                element: <ExerciseLab/>
            },
            {
                path: "lab/:id",
                element: <ExerciseLab/>
            },
            {
                path: "topic/:id",
                element: <Topic/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
