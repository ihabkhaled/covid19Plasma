
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Login from "components/Login/Login";
import Donor from "components/Donor/DonorForm.jsx";
import Maps from "views/Maps";

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-graph",
    component: Login,
    layout: "",
    ignore:true
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: ""
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: ""
  },
  {
    path: "/donor",
    name: "Donor Form",
    icon: "pe-7s-user",
    component: Donor,
    layout: "",
    // ignore:true
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-user",
    component: Maps,
    layout: "",
    // ignore:true
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: ""
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: ""
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: ""
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: ""
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: ""
  // }
];

export default dashboardRoutes;
