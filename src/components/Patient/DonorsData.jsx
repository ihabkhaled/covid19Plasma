import React, { useState , useEffect , Suspense } from "react";
import { FormGroup } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Maps from "../../views/Maps";
import style from "./Patient.module.scss";
import "../../assets/css/maps.css";
import DataTable from 'react-data-table-component';
import CircularProgress from '@material-ui/core/CircularProgress';

const columns = [
    {
        name: 'Name',
        selector: 'Name',
        sortable: true,
        wrap: true,
        width:'250px'
    },
    {
        name: 'Phone',
        selector: 'Phone',
        sortable: true,
        wrap: true,
        grow:2
    },
    {
        name: 'Email',
        selector: 'Email',
        sortable: true,
        wrap: true,
        width:'250px'
    },
    {
        name: 'Age',
        selector: 'Age',
        sortable: true,
        wrap: true
    },
    {
        name: 'Blood Type',
        selector: 'BloodType',
        sortable: true,
        wrap: true
    },
    {
        name: 'Last Donating Date',
        selector: 'LastDonationDate',
        sortable: true,
        wrap: true,
        width:'150px'
    },
    {
        name: 'Recovery Date',
        selector: 'RecoveryDate',
        sortable: true,
        wrap: true,
        width:'150px'
    },
    {
        name: 'Chronic Diseases',
        selector: 'Diseases',
        sortable: true,
        wrap: true,
        width:'250px'
    },
    {
        name: 'Distance',
        selector: 'Distance',
        sortable: true,
        wrap: true
    },
    {
        name: 'Address',
        selector: 'Address',
        sortable: true,
        wrap: true,
        width:'250px'
    },
];

const customStyles = {
    headCells: {
      style: {
        fontWeight:'bold',
        backgroundColor: "#122861",
        color:'#FFFFFF',
        borderStyle:'solid',
        borderWidth:'1px',
        borderColor:'#8b8b8b'
      },
    },
    cells: {
        style: {
            borderStyle:'solid',
            borderWidth:'1px',
            borderColor:'#8b8b8b'
        },
    }
  };

const DonorsData = (props) => {

    useEffect(() => {
        let data = props.donorsFound;
        data = data.map(function(item) { 
            // const obj = Object.assign({}, item);
            const obj = { ...item };
            obj['Distance'] = (item.Distance/1000).toFixed(2) + ' KM';
            obj['Diseases'] = item.Diseases.join(', ');
            obj['LastDonationDate'] = new Date(obj['LastDonationDate']).toLocaleDateString();
            obj['RecoveryDate'] = new Date(obj['RecoveryDate']).toLocaleDateString();
            return obj;
        });
        setDonorsDataArr(data);
      }, [props.donorsFound]);
      
    //Data states
    const [donorsDataArr, setDonorsDataArr] = useState([]);

    return (
            <Grid fluid>
                {donorsDataArr.length > 0 && (
                    <>
                        <label className={style.mapNote}>Donors Data Found</label>
                        <Row>
                            <Col md={12}>
                                <Card
                                    ctTableFullWidth
                                    ctTableResponsive
                                    content={
                                        <div className={style.tablePadding}>
                                            <Suspense fallback={<CircularProgress />}>
                                            <DataTable
                                                className={style.tableCss}
                                                noHeader
                                                striped
                                                // responsive
                                                highlightOnHover
                                                pointerOnHover
                                                columns={columns}
                                                data={donorsDataArr}
                                                customStyles={customStyles}
                                                pagination={true}
                                                defaultSortField={'Distance'}
                                                // paginationServer={true}
                                                // allowOverflow={true}
                                            />
                                            </Suspense>
                                        </div>
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                            <FormGroup controlId="Map2" bsSize="large">
                                <label className={style.mapNote}>Donors Locations</label>
                                <div className={style.Maps}>
                                <Suspense fallback={<CircularProgress />}>
                                    <Maps
                                        id={2}
                                        zoom={14}
                                        donorsPositions={donorsDataArr}
                                    />
                                </Suspense>
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