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
            <Grid>
                <Row>
                    <Col md={12}>
                        <Card className={style.label}
                            title="welcome"
                            content={'welcome'}
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