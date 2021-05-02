import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

export default{
    mode: 'history',
    linkActiveClass: "active",
    routes:[
        {
            path: "*",
            component: NotFound
        },
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/login",
            component: Login
        }
    ]
}
