
import React, { Component } from "react";
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import Welcome from "components/Welcome/Welcome";
import P404 from "components/404/404";

import { style } from "variables/Variables.jsx";

import routes from "routes.js";
import Router from "Router.js";

import image from "assets/img/sidebar-4.jpg";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "black",
      hasImage: true
    };
  }


  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Requested page not found";
  };

  searchRoutes = (nameKey, myArray) => {
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].path == nameKey) {
              return true;
          }
      }
  };

  componentDidMount() {

  }
  
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    let foundRoute = this.searchRoutes(this.props.location.pathname,routes);
    return (
      <div className="wrapper">
        <NotificationContainer/>
        <Sidebar {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          {this.props.location.pathname == '/' ? (
              <AdminNavbar
                {...this.props}
                brandText="COVID-19 PLASMA DONATIONS"
              />
            ) : (
              <AdminNavbar
                {...this.props}
                brandText={this.getBrandText(this.props.location.pathname)}
              />
            )}
          {foundRoute ? (
              <Router
                location={this.props.location.pathname} 
              />
          ) : (
            this.props.location.pathname == '/' ? (
              <Welcome />
            ) : (
              <P404 />
            )
          )}
          <Footer />
        </div>
      </div>
    );
  }
}

export default layout;
