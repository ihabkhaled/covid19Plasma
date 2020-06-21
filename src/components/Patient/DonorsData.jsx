import React, { useState , useEffect , Suspense } from "react";
import { FormGroup } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Maps from "../../views/Maps";
import style from "./Patient.module.scss";
import "../../assets/css/maps.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTable from 'material-table';
import Button from "components/CustomButton/CustomButton.jsx";
// import DialogCustom from "../Dialog/Dialog";

const columns = [
    {
        title: 'Name',
        field: 'Name',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Phone',
        field: 'Phone',
        render: rowData => <a href={'tel:' + rowData.Phone}>{rowData.Phone}</a>,
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Email',
        field: 'Email',
        render: rowData => <a href={'mailto:' + rowData.Email}>{rowData.Email}</a>,
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Age',
        field: 'Age',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Blood Type',
        field: 'BloodType',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Last Donating Date',
        field: 'LastDonationDate',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Recovery Date',
        field: 'RecoveryDate',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Chronic Diseases',
        field: 'Diseases',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
    {
        title: 'Distance',
        field: 'Distance',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        },
        defaultGroupSort:'asc'
    },
    {
        title: 'Area',
        field: 'Address',
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            border: 'solid 1px #FFF'
        }
    },
];

const DonorsData = (props) => {

    useEffect(() => {
        let data = props.donorsFound;
        // let locations = [];
        data = data.map(function(item) { 
            // const obj = Object.assign({}, item);
            const obj = { ...item };
            // locations.push({latitude:obj['GeoLocation'][0], longitude:obj['GeoLocation'][1]});
            obj['Distance'] = (item.Distance/1000).toFixed(2) + ' KM';
            obj['Diseases'] = item.Diseases.join(', ');
            obj['LastDonationDate'] = new Date(obj['LastDonationDate']).toLocaleDateString();
            obj['RecoveryDate'] = new Date(obj['RecoveryDate']).toLocaleDateString();
            return obj;
        });
        // setTheLocations(locations);
        setDonorsDataArr(data);
      }, [props.donorsFound]);
      
    //Data states
    const [donorsDataArr, setDonorsDataArr] = useState([]);
    // const [ theLocations, setTheLocations] = useState([]);
    // const [ heatMap, setHeatMap] = useState(false);

    // const showMap = () => {
    //     setLoadMap(true);
    // };

    // const showHeatMap = () => {
    //     setHeatMap(true);
    // };

    return (
            <Grid fluid className="fontSize">
                {donorsDataArr.length > 0 && (
                    <>
                        <label className={style.mapNote}>Donors Data Found</label>
                        <Row>
                            <Col lg={12}>
                                {/* <Button onClick={showHeatMap} bsStyle="info" pullLeft fill>
                                    Heat Map
                                </Button> */}

                                {/* <DialogCustom
                                    open={heatMap}
                                    title={'Title'}
                                    locations={theLocations}
                                    setHeatMap={setHeatMap}
                                /> */}

                                <br></br>
                                <Card
                                    ctTableFullWidth
                                    ctTableResponsive
                                    content={
                                            <MaterialTable
                                                title="Donor's Data"
                                                columns={columns}
                                                data={donorsDataArr}
                                                options={{
                                                    exportButton: true
                                                }}
                                                OverlayLoading
                                                style={{fontSize: '50px'}}
                                                pagination={{
                                                    labelRowsSelect:'10'
                                                }}
                                            />
                                    }
                                />
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col md={12}>
                            <Button onClick={showMap} bsStyle="info" pullLeft fill>
                                    Load Donors Map
                            </Button>
                            {loadMap == true && (
                                <FormGroup controlId="Map2" bsSize="large">
                                    <label className={style.mapNote}>Donors Locations</label>
                                    <div className={style.Maps}>
                                    <Suspense fallback={<CircularProgress />}>
                                        <Maps
                                            id={2}
                                            zoom={10}
                                            donorsPositions={donorsDataArr}
                                        />
                                    </Suspense>
                                    </div>
                                </FormGroup>
                            )}
                            </Col>
                        </Row> */}
                    </>
                )}
            </Grid>
    );
};

export default DonorsData;