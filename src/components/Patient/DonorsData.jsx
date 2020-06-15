import React, { useState , useEffect } from "react";
import { FormGroup } from "react-bootstrap";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Maps from "../../views/Maps";
import style from "./Patient.module.scss";
import "../../assets/css/maps.css";

const DonorsData = (props) => {

    useEffect(() => {
        setDonorsDataArr(props.donorsFound);
      }, [props.donorsFound]);

    //Data states
    const [donorsDataArr, setDonorsDataArr] = useState([]);
    let i = 0;

    return (
            <Grid fluid>
                {
                    //Data Result here
                }
                {donorsDataArr.length > 0 && (
                    <>
                        <label className={style.mapNote}>Donors Data Found</label>
                        <Row>
                            <Col md={12}>
                                <Card
                                    title="Donors list"
                                    ctTableFullWidth
                                    ctTableResponsive
                                    content={
                                        <Table size="sm" striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                    <td>#</td>
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
                                                {donorsDataArr.map( key => {
                                                    return (
                                                        <tr>
                                                            <td>{++i}</td>
                                                            <td>{key.Name}</td>
                                                            <td>{key.Phone}</td>
                                                            <td>{key.Email}</td>
                                                            <td>{key.Age}</td>
                                                            <td>{key.BloodType}</td>
                                                            <td>2019</td>
                                                            <td>{key.RecoveryDate}</td>
                                                            <td>{key.Diseases}</td>
                                                            <td>5 KMs</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </Table>
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                            <FormGroup controlId="Map2" bsSize="large">
                                <label className={style.mapNote}>Donors Locations</label>
                                <div className={style.Maps}>
                                    <Maps
                                        id={2}
                                        zoom={10}
                                        donorsPositions={donorsDataArr}
                                    />
                                </div>
                            </FormGroup>
                            </Col>
                        </Row>
                    </>
                )}
            </Grid>
    );
};

export default DonorsData;