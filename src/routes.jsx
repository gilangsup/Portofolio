import ErrorPage from "./pages/404";
import Root from "./Root"
import Admin from "./pages/admin";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";


const listRoute = [
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "backoffice",
                element: <Admin/>
            },
        ]
    }
]

const routeApp = createBrowserRouter(listRoute);
export default routeApp;