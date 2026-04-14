import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Stats from "../pages/stats/Stats";
import Timeline from "../pages/timeline/Timeline";
import FriendDetails from "../pages/friends/FriendDetails";
import NotFound from "../pages/not-found/NotFound";

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout/>, children: [
        {index: true, element: <Home/>},
        {path: 'stats', element: <Stats/>},
        {path: 'timeline', element: <Timeline/>},
        {path: 'friend-details/:id', element: <FriendDetails/>},
        {path: '*', element: <NotFound/>}
    ]}
]);

export default router;