import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Stats from "../pages/stats/Stats";
import Timeline from "../pages/timeline/Timeline";

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout/>, children: [
        {index: true, element: <Home/>},
        {path: '/stats', element: <Stats/>},
        {path: '/timeline', element: <Timeline/>},
    ]}
]);

export default router;