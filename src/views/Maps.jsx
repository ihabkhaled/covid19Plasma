import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { ReactBingmaps } from 'react-bingmaps';


const Maps = (props) => {

  // useEffect(() => {
  //   if (listener == false) {
  //     setPosition([1, 1]);
  //     setPosition([]);
  //     if (document.getElementById("LocateMeButton")) {
  //       document.getElementById("LocateMeButton").addEventListener("click", function () {
  //         setTimeout(function () {
  //           console.log(document.getElementsByClassName("bm_LogoContainer quadrantOverride")[0].getElementsByTagName("a")[0].getAttribute("href"));
  //         }, 3000);
  //       });
  //       document.getElementById("LocateMeButton").dispatchEvent(new Event('click'));

  //       setListener(true);
  //     } else {

  //     }
  //   } else {

  //   }
  // });
  // const [listener, setListener] = useState([]);

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
            center={[0,0]}
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
              props.id == 1 ?
                (
                  [
                    {
                      "location": position, "option": { color: 'red' }
                    }
                  ]
                ) : (
                  props.donorsPositions.map(val => (
                    {
                       "location": val.GeoLocation, "option": { color: 'red' } 
                    }
                  ))
                )
            }
            infoboxes={
              props.id == 1 ? (
                [
                  {
                    "location": position, "option": { title: 'My Location' }
                  }
                ]
              ) : (
                  props.donorsPositions.map(val => (
                    {
                       "location": val.GeoLocation, "option": { title: ' Donor\'s Name: ' + val.Name + ', Blood Type: ' + val.BloodType } 
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