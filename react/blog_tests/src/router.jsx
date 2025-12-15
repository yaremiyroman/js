import { createBrowserRouter } from "react-router";

import App from './App.jsx';
import { Posts, Post, About, Contacts } from './Containers';

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Posts /> },
            { path: "posts", element: <Posts /> },
            { path: "post/:id", element: <Post /> },
            { path: "about", element: <About /> },
            { path: "contacts", element: <Contacts /> },
        ],
    },
]);
