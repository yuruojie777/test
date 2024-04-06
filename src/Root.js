import {createBrowserRouter, RouterProvider} from "react-router-dom";

import React from 'react';
import App from "./App";
import {Privacy} from "./Privacy";

function Root() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
        },
        {
            path: '/privacy',
            element: <Privacy/>
        }
    ]);
    return (
        <div className="xxx">
            <RouterProvider router={router} />
        </div>
    );
}

export default Root;
