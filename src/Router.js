import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes.js";

export default function Router() {

    const getRoutes = routes => {
        return routes.map((prop, key) => {
        if (prop.layout === "") {
            return (
            <Route
                path={prop.layout + prop.path}
                render={props => (
                <prop.component
                    {...props}
                />
                )}
                key={key}
            />
            );
        } else {
            return null;
        }
        }); 
  };

  return (
    <Switch>{getRoutes(routes)}</Switch>
  );

}