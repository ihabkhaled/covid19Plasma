
// import Dashboard from "views/Dashboard.jsx";
import Donor from "components/Donor/DonorForm.jsx";
import Patient from "components/Patient/Patient.jsx";
import Welcome from "components/Welcome/Welcome.jsx";

const dashboardRoutes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: "pe-7s-home",
    component: Welcome,
    layout: "",
    // ignore:true
  },
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
];

export default dashboardRoutes;
