import Home from "./views/home/Home.vue";
import CompanyList from "./views/companyList/companyList.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/portal", redirect: "/portal/index" },
  {
    path: "/portal/index",
    component: Home,
  },
  {
    path: "/portal/companyList",
    component: CompanyList,
  },
];

export default routes;
