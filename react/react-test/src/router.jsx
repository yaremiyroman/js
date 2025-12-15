import { createBrowserRouter } from "react-router";

import App from './App.jsx';
import About from './Containers/Pages/About.jsx';
import Home from './Containers/Pages/Home.jsx';
import { Contacts } from './Containers/Pages/Contacts.jsx';
import Info from './Containers/Pages/Info.jsx';
import Details from './Containers/Pages/Details.jsx';
import Details2 from './Containers/Pages/Details2.jsx';
import Details3 from './Containers/Pages/Details3.jsx';
import User from './Containers/Pages/User.jsx';
import MultipleUser from './Containers/Pages/MultipleUser.jsx';

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "user/:id", element: <User /> },
            { path: "user/:id/:letter", element: <MultipleUser /> },
            { path: "about", element: <About /> },
            { path: "contacts", element: <Contacts /> },
            {
                path: "info", element: <Info />
            },
            {
                path: "details",
                element: <Details />,
                children: [
                    { path: "details-2", element: <Details2 /> },
                    { path: "details-3", element: <Details3 /> },
                ]
            },
        ],
    },
]);
