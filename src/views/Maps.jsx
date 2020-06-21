import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { ReactBingmaps } from 'react-bingmaps';


const Maps = (props) => {

    useEffect(() => {
      // if (listener == false) {
      //   setPosition([1, 1]);
      //   setPosition([]);
      //   if(props.location)
      //   {
      //       if (props.location.length > 0) {
      //         props.setLocation(null);
      //         setListener(true);
      //         setTimeout(() => {
      //           let myLocation = props.location.split(',');
      //           let locaitonData = parseFloat(myLocation[0]) + ',' + parseFloat(myLocation[1]);
      //           props.setLocation(locaitonData);
      //           setPosition([parseFloat(myLocation[0]),parseFloat(myLocation[1])]);
      //         },1000);
      //     } else {
      //     }
      //   } else {
      //   }
      // } else { 
      // }
    });

    useEffect(() => {

    },[props.centreMap]);

    useEffect(() => {
      if(props.location)
      {
        if (props.location.length > 0) {
              let myLocation = props.location.split(',');
              setPosition([parseFloat(myLocation[0]),parseFloat(myLocation[1])]);
        } else {
          setPosition([0,0]);
        }
      } else {
        setPosition([0,0]);
      }
    },[props.location]);

  const [listener, setListener] = useState(false);
  const [position, setPosition] = useState([]);

  const getLocation = (data) => {
    if(data)
    {
      props.setCentreMap(null);
      let locaitonData = data.latitude + ',' + data.longitude;
      props.setLocation(locaitonData);
      setPosition([data.latitude, data.longitude]);
    }
  }

  return (
    <Grid fluid>
      <Row>
        <Col lg={12} sm={12}>
          <ReactBingmaps
            id={props.id}
            bingmapKey="AqgmKUtfTPyfrncmMyD181gzU-0LlgISmXL1noS97GScNCtI3Ws8V38oHrt7uN4m"
            center={
              props.centreMap ? (
                  position
              ) : (
                [0,0]
              )}
            mapTypeId={"road"}
            getLocation={
              props.id == 1 ? (
                { addHandler: "click", callback: getLocation }
              ) : (
                  ''
                )
            }
            zoom={props.zoom}
            infoboxesWithPushPins = {
              props.id == 1 ? (
                props.location && props.location.length > 0 ?
                  (
                    [
                      {
                        "location":position, 
                        "addHandler":"mouseover",
                        "infoboxOption": { title: 'My Location', description: 'Location ' + position },
                        "pushPinOption":{ title: 'My Location' }
                      }
                    ]
                ) : (
                  [ { } ]
                )
              ) : (
                props.id == 2 && (
                  props.donorsPositions.map(val => (
                    {
                      "location":val.GeoLocation, 
                      "addHandler":"mouseover",
                      "infoboxOption": { title: 'Donor: ' + val.Name, description: 'Phone: ' + val.Phone + ' &nbsp;&nbsp; Blood Type: ' + val.BloodType },
                      "pushPinOption":{ title: val.Distance }
                    }
                  ))
                )
              )
            }
          >
          </ReactBingmaps>
        </Col>
      </Row>
    </Grid>
  );
};

export default Maps;