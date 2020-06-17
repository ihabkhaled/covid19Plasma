import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { ReactBingmaps } from 'react-bingmaps';


const Maps = (props) => {

    useEffect(() => {
      if (listener == false) {
        setPosition([1, 1]);
        setPosition([]);
        if(props.location)
        {
            if (props.location.length > 0) {
              props.setLocation(null);
              setListener(true);
              setTimeout(() => {
                let myLocation = props.location.split(',');
                let locaitonData = parseFloat(myLocation[0]) + ',' + parseFloat(myLocation[1]);
                props.setLocation(locaitonData);
                setPosition([parseFloat(myLocation[0]),parseFloat(myLocation[1])]);
              },1000);
          } else {
          }
        } else {
        }
      } else { 
      }
    });

  const [listener, setListener] = useState(false);
  const [position, setPosition] = useState([]);

  const getLocation = (data) => {
    let locaitonData = data.latitude + ',' + data.longitude;
    props.setLocation(locaitonData);
    setPosition([data.latitude, data.longitude]);
  }

  return (
    <Grid fluid>
      <Row>
        <Col lg={12} sm={12}>
          <ReactBingmaps
            id={props.id}
            bingmapKey="AqgmKUtfTPyfrncmMyD181gzU-0LlgISmXL1noS97GScNCtI3Ws8V38oHrt7uN4m"
            center={position}
            mapTypeId={"road"}
            getLocation={
              props.id == 1 ? (
                { addHandler: "click", callback: getLocation }
              ) : (
                  ''
                )
            }
            zoom={props.zoom}
            pushPins={
              props.id == 1 &&
                (
                  [
                    {
                      "location": position, "option": { color: 'red' }
                    }
                  ]
                )
            }
            infoboxes={
              props.id == 1 && (
                [
                  {
                    "location": position, "option": { title: 'My Location' }
                  }
                ]
              )
            }
            infoboxesWithPushPins = {
              props.id == 2 && (
                props.donorsPositions.map(val => (
                  {
                    "location":val.GeoLocation, 
                    "infoboxOption": { title: 'Donor: ' + val.Name, description: 'Blood Type: ' + val.BloodType },
                    "pushPinOption":{ title: val.Distance }
                  }
                ))
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