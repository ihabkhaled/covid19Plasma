import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

import style from "./Welcome.module.scss";

export default function Welcome() {

    useEffect(() => {
    }, []);

    const history = useHistory();

    const handleDonation = () => {
        history.push("/patient");
    };

    const handleSearchDonors = () => {
        history.push("/donor");
    };

    return (
        <div className="content">
            <br></br>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card className={style.label}
                            content={
                                <div>
                                    <div>
                                        <h3 align='left' dir='ltr'>About Plasma</h3>
                                        <p align='left' dir='ltr'>If you have fully recovered from COVID-19, you may be able to help patients currently fighting the infection by donating your plasma.
                                        <br></br> Because you fought the infection, your plasma now contains COVID-19 antibodies.
                                        <br></br> These antibodies provided one way for your immune system to fight the virus when you were sick, so your plasma may be able to be used to help others fight off the disease.</p>

                                        <h3 align='right' dir='rtl'>عن البلازما</h3>
                                        <p align='right' dir='rtl'>
                                        إذا كنت قد تعافت تمامًا من COVID-19 ، فقد تتمكن من مساعدة المرضى الذين يحاربون العدوى حاليًا عن طريق التبرع بالبلازما. <br></br>
                                        لأنك قاتلت العدوى ، تحتوي البلازما الآن على الأجسام المضادة لـ COVID-19. <br></br>
                                        قدمت هذه الأجسام المضادة طريقة واحدة لجهاز المناعة لمحاربة الفيروس عندما كنت مريضًا ، لذلك يمكن استخدام البلازما لمساعدة الآخرين في محاربة المرض.<br></br>
                                        </p>
                                    </div>
                                    <br></br>
                                    <h3>Core Features</h3>
                                    <ul>
                                        <li>
                                            <b>Donating</b>, Apply your data for COVID-19 Plasma Donations. &nbsp;
                                            <Button onClick={handleDonation} bsStyle="info" fill type="button">
                                                Donate
                                            </Button>
                                        </li>
                                        <br></br>
                                        <br></br>
                                        <li>
                                            <b>Search for Donors</b>, Search and Find the nearest donors who are ready to donate their Plasma. &nbsp;
                                            <Button onClick={handleSearchDonors} bsStyle="info" fill type="button">
                                                Find Plasma
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </Col>
                </Row>

                {
                    //Data Result here
                }
            </Grid>
        </div>
    );
}