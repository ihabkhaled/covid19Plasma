import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

import style from "./Welcome.module.scss";

export default function Welcome() {

    useEffect(() => {
    }, []);

    return (
        <div className="content">
            <br></br>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card className={style.label}
                            title="COVID-19 PLASMA DONATIONS"
                            content={'If you have fully recovered from COVID-19, you may be able to help patients currently fighting the infection by donating your plasma. \n Because you fought the infection, your plasma now contains COVID-19 antibodies. These antibodies provided one way for your immune system to fight the virus when you were sick, so your plasma may be able to be used to help others fight off the disease.'}
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