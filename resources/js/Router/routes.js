// import Home from "../Pages/Home";
// import About from "../Pages/About";
// import NotFound from "../Pages/NotFound";
// import Login from "../Components/Login";

// export default{
//     mode: 'history',
//     linkActiveClass: "active",
//     routes:[
//         {
//             path: "*",
//             component: NotFound
//         },
//         {
//             path: "/",
//             component: Home,
//             name: "Home"
//         },
//         {
//             path: "/about",
//             component: About
//         },
//         {
//             path: "/login",
//             component: Login
//         }
//     ]
// }

const routes = [
    {
        path: "*",
        component: () => import('../Pages/NotFound'),
        name: 'not-found'
    },
    {
        path: "/",
        component: () => import('../Pages/Home.vue'),
        name: "home"
    },
    {
        path: "/about",
        component: () => import('../Pages/About.vue'),
        name: 'about'
    },
    {
        path: "/login",
        component: () => import('../Components/Login'),
        name: 'login'
    }
]

export default routes;
