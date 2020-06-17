import React, { useEffect } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

import style from "./404.module.scss";

export default function P404() {

    useEffect(() => {
    }, []);

    return (
        <div className="content">
            <br></br>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card className={style.label}
                            content={
                                <div>
                                    <img alt="Not Found" width="500" height="350" src="https://media0.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" />
                                </div>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}