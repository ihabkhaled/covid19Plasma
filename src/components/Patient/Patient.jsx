import React, { useState , useEffect } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Radio from 'components/CustomRadio/CustomRadio';
import Checkbox from 'components/CustomCheckbox/CustomCheckbox';

import Maps from "../../views/Maps";
import style from "./Patient.module.scss";
import "../../assets/css/maps.css";
import { API } from "../../variables/APIs.js";
import showNotification from '../../variables/Notifications';

export default function Patient() {

    useEffect(() => {
        // submitFormData();
      }, []);

    //Data states
    const [location, setLocation] = useState("");
    const [bloodType, setBloodType] = useState("");

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

    const handleRadio = event => {
        const target = event.target;
        setBloodType(target.value);
    };

    //Validations here
    const validateForm = () => {
        // submitFormData();
        return location && bloodType;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitFormData();
    }

    const submitFormData = async () => {
        try {
            console.log(location, bloodType);
            const response = await API.getData(location,bloodType);
        
            console.log(response.data);
            if(response.data.status)
            {
                showNotification('success','Data Retrieved Successfully!');
            }
            
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="content">
            <br></br>
            <Grid>
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
                                                <Radio
                                                    number={val}
                                                    key={val}
                                                    option={val}
                                                    name="bloodTypes"
                                                    onChange={handleRadio}
                                                    label={val}
                                                    required
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

                {
                    //Data Result here
                }
                <Row>
                    <Col md={12}>
                        <Card
                            title="Donors list"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Number</td>
                                            <td>Email</td>
                                            <td>Age</td>
                                            <td>Blood Type</td>
                                            <td>Last Donating</td>
                                            <td>Recovery Date</td>
                                            <td>Chronic Diseases</td>
                                            <td>Distance</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ihab</td>
                                            <td>1234567890</td>
                                            <td>ihab@gmai.com</td>
                                            <td>25</td>
                                            <td>B+</td>
                                            <td>2019</td>
                                            <td>2019</td>
                                            <td>No Chronic diseases</td>
                                            <td>5 KMs</td>
                                        </tr>
                                        {/* {tdArray.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    {prop.map((prop, key) => {
                                                        return <td key={key}>{prop}</td>;
                                                    })}
                                                </tr>
                                            );
                                        })} */}
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
                <FormGroup controlId="Map2" bsSize="large">
                    <label className={style.mapNote}>Donors Locations</label>
                    <div className={style.Maps}>
                        <Maps
                            id={2}
                            zoom={12}
                            donorsPositions={
                                [
                                    { position: [30.061439829203486, 31.19165206745909], donor: 'mai' },
                                    { position: [30.0615553725032, 31.192682035720807], donor: 'monmon' },
                                    { position: [30.06159663031896, 31.18709231213377], donor: 'ihab' },
                                    { position: [30.061022921234247, 31.19688773945628], donor: 'mawardy' },
                                    { position: [30.047741330663406, 31.195256956375225], donor: 'kareem' },
                                    { position: [30.038957151934078, 31.2158563216096], donor: 'mariam' }
                                ]
                            }
                        />
                    </div>
                </FormGroup>
            </Grid>
        </div>
    );
}