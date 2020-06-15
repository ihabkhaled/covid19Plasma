import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes.js";

export default function Router (props) {

    const searchRoutes = (nameKey, myArray) => {
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].path == nameKey) {
                return true;
            }
        }
    };

    const getRoutes = routes => {
        let foundRoute = searchRoutes(props.location,routes);
        if(foundRoute)
        {
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
        } else {
            return null;
        }
  };

  return (
    <Switch>{getRoutes(routes)}</Switch>
  );

}