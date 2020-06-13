
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import Notifications from "views/Notifications.jsx";
import Donor from "components/Donor/DonorForm.jsx";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
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
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: ""
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: ""
  }
];

export default dashboardRoutes;
