import Home from "./views/home/Home.vue";

const routes = [
  { path: "/", redirect: "/portal/index" },
  { path: "/portal", redirect: "/portal/index" },
  {
    path: "/portal/index",
    component: Home,
  },
];

export default routes;
