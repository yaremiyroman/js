import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import App from './App.jsx';
import {
    Posts,
    About,
    Contacts,
    AddPost,
    EditPost,
    NotFound,
    Forbidden,
} from './containers';

const Post = lazy(() => import('./containers/Posts/Post'));

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
            { path: "add", element: <AddPost /> },
            { path: "edit/:id", element: <EditPost /> },
            { path: "403", element: <Forbidden /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);
