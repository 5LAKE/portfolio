import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Main = lazy(()=> import("./pages/main")) 

const RouterConfig = () => {
    const routes = useRoutes([
        { path: "/", element: <Main />}
    ]);

    return routes;
};

export default RouterConfig;
