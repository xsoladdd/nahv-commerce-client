import React from "react";

const Shop = React.lazy(() => import("./pages/Shop"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Home = React.lazy(() => import("./pages/Homepage"));
// const TripList = React.lazy(() => import("./pages/TripList"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", name: "Home", component: Home, exact: true },
  { path: "/shop", name: "shop", component: Shop, exact: true },
  { path: "/login", name: "Login", component: Login, exact: true },
  { path: "/register", name: "Register", component: Register, exact: true },
  { path: "/brand/:brand_name", name: "Brand", component: Home, exact: true },
  { path: "/cart", name: "Cart", component: Home, exact: true },
  {
    path: "/profile",
    name: "Profile",
    component: Home,
    exact: true,
    private: true,
  },
  // { path: "/trips", name: "trip", component: TripList },
  // { path: "/theme", name: "Theme", component: Colors, exact: true },
];

export default routes;
