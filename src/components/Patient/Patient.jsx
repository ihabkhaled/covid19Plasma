import React, { useState , useEffect, Suspense } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Checkbox from 'components/CustomCheckbox/CustomCheckbox';

import Maps from "../../views/Maps";
import style from "./Patient.module.scss";
import "../../assets/css/maps.css";
import { API } from "../../variables/APIs.js";
import showNotification from '../../variables/Notifications';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Patient() {

    useEffect(() => {
        // submitFormData();
      }, []);

    const DonorsData = React.lazy(() => import('./DonorsData.jsx'));

    //Data states
    const [location, setLocation] = useState("");
    const [donorsFound, setDonorsFound] = useState([]);
    const [bloodType, setBloodType] = useState({});

    const bloodTypes = [
        'O-',
        'O+',
        'A-',
        'A+',
        'B-',
        'B+',
        'AB-',
        'AB+'
    ];

    const handleBloodType = event => {
        setBloodType({ ...bloodType, [event.target.name]: event.target.checked });
    }

    //Validations here
    const validateForm = () => {
        return location;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitFormData();
    }

    const submitFormData = async () => {
        try {
            let locationData = location.split(",");
            let checkItems = [];
            for (const theItem in bloodType) {
                if (bloodType[theItem] === true) {
                checkItems.push(theItem);
                }
            }
            const response = await API.getData([parseFloat(locationData[0]),parseFloat(locationData[1])],checkItems);
        
            if(response.data)
            {
                if(response.data.State == "Success" && response.data.Donors.length > 0) {
                    showNotification('success','Data Found!');
                        setDonorsFound(response.data.Donors);
                } else {
                    showNotification('error','error!');
                    setDonorsFound([]);
                }
            } else {
                showNotification('error','error!');
                setDonorsFound([]);
            }
            
        } catch (error) {
            showNotification('error','error!');
            setDonorsFound([]);
            console.log(error);
        }
      };

    return (
        <div className="content">
            <br></br>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card className={style.label}
                            title="Search for a donor"
                            content={
                                <form onSubmit={handleSubmit}>

                                    <FormGroup className={style.Cursor} controlId="Map" bsSize="large">
                                        <label className={style.mapNote}>Select your location on map</label> <span className={style.require}>*</span>
                                        <div className={style.Maps}>
                                            <Maps
                                                id={1}
                                                zoom={16}
                                                setLocation={setLocation}
                                                location={location}
                                                disableStreetside={true}
                                            />
                                        </div>
                                    </FormGroup>

                                    <FormGroup controlId="location" bsSize="large">
                                        <ControlLabel className={style.label}>Location <span className={style.require}>*</span></ControlLabel>
                                        <FormControl
                                            disabled
                                            autoFocus
                                            type="location"
                                            value={location}
                                            required
                                            placeholder="Select your location on the map"
                                        />
                                    </FormGroup>

                                    <FormGroup className={style.radioButtons} controlId="text" bsSize="large">
                                        <ControlLabel className={style.label}>Select Blood Type <span className={style.require}>*</span></ControlLabel>
                                        {bloodTypes.map((val) => {
                                            return (
                                                <Checkbox
                                                    number={val}
                                                    key={val}
                                                    name={val}
                                                    label={val}
                                                    checked={bloodType[val]}
                                                    onChange={handleBloodType}
                                                />
                                            );
                                        })}
                                    </FormGroup>

                                    <Button bsStyle="info" pullRight fill disabled={!validateForm()} type="submit">
                                        Submit
                                    </Button>
                                    <div className="clearfix" />
                                </form>
                            }
                        />
                    </Col>
                </Row>

                {donorsFound.length > 0 && (
                    <Suspense fallback={<CircularProgress />}>
                        <DonorsData
                            donorsFound={donorsFound}
                        />
                    </Suspense>
                )}
            </Grid>
        </div>
    );
}