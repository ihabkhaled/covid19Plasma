import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { ReactBingmaps } from 'react-bingmaps';


const Maps = (props) => {

  // useEffect(() => {
  //   if(listener == false)
  //   {
  //     setPosition([1,1]);
  //     setPosition([]);
  //     if (document.getElementById("LocateMeButton")) {
  //       document.getElementById("LocateMeButton").removeEventListener('click', function () {

  //       });

  //       document.getElementById("LocateMeButton").addEventListener("click", function () {

  //       });
  //       document.getElementById("LocateMeButton").dispatchEvent(new Event('click'));
  //       setListener(true);
  //     } else {

  //     }
  //   } else {

  //   }
  // });

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
            bingmapKey="AqgmKUtfTPyfrncmMyD181gzU-0LlgISmXL1noS97GScNCtI3Ws8V38oHrt7uN4m"
            center={position}
            mapTypeId={"road"}
            getLocation={
              { addHandler: "click", callback: getLocation }
            }
            zoom={17}
            pushPins={
              [
                {
                  "location": position, "option": { color: 'red' }
                }
              ]
            }
            infoboxes = {
              [
                {
                  "location":position, "option":{ title: 'My Location' }
                }
              ]
            }
          >
          </ReactBingmaps>
        </Col>
      </Row>
    </Grid>
  );
};

export default Maps;