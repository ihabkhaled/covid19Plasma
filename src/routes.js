
// import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import Donor from "components/Donor/DonorForm.jsx";
import Patient from "components/Patient/Patient.jsx";

const dashboardRoutes = [

  {
    path: "/patient",
    name: "Search for donors",
    icon: "pe-7s-search",
    component: Patient,
    layout: ""
  },
  {
    path: "/donor",
    name: "Apply as a donor",
    icon: "pe-7s-user",
    component: Donor,
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
];

export default dashboardRoutes;
