import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Main = lazy(()=> import("./pages/main")) 
const About = lazy(()=> import("./pages/about")) 
const Port = lazy(()=> import("./pages/port")) 

const RouterConfig = () => {
    const routes = useRoutes([
        { path: "/", element: <Main />},
        { path: "/about", element: <About />},
        { path: "/port", element: <Port />}
    ]);

    return routes;
};

export default RouterConfig;
