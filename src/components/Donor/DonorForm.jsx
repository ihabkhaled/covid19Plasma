import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Radio from 'components/CustomRadio/CustomRadio';
import Checkbox from 'components/CustomCheckbox/CustomCheckbox';
import ButtonDialog from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Maps from "../../views/Maps";
import style from "./DonorForm.module.scss";
import "../../assets/css/maps.css";
import { API } from "../../variables/APIs.js";
import showNotification from '../../variables/Notifications';

export default function Donor() {

  useEffect(() => {
    setOpen(true);
  }, []);


  //Data states
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [recoveryDate, setRecoveryDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  //Modals
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState();

  const bloodTypes = [
    'O-',
    'O+',
    'A-',
    'A+',
    'B-',
    'B+',
    'AB-',
    'AB+',
    'Not sure'
  ];

  const chronicDiseases = [
    'Blood Pressure',
    'Diabetes',
    'Cardiac Disease',
    'Virus C',
    'Virus B',
    'AIDS'
  ];

  const handleRadio = event => {
    const target = event.target;
    setBloodType(target.value);
  };

  const handleDisease = event => {
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
  }

  const handleDisagree = () => {
    setOpen(false);
    setAgree(false);
  };

  const handleAgree = () => {
    setOpen(false);
    setAgree(true);
  };

  //Validations here
  const validateForm = () => {
    // return email.length > 0 && name.length > 8 && mobile.length > 10 && age && location && bloodType;
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFormData();
  }

  const submitFormData = async () => {
    try {
      let locationData = location.split(",");
      let checkItems = [];
      for (const theItem in checkedItems) {
        if (checkedItems[theItem] === true) {
          checkItems.push(theItem);
        }
      }

      const response = await API.setData(name,[parseFloat(locationData[0]),parseFloat(locationData[1])],mobile,email,bloodType,donationDate,recoveryDate,age,checkItems,address);

      if(response.data)
      {
        if(response.data.State == "success")
        {
          showNotification('success','Data Saved!');
        } else {
          showNotification('error','error!');
        }
      }
    } catch (error) {
      showNotification('error','error!');
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleAgree}
        className={style.DialogCSS}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
      >
        <DialogTitle className={style.headerDialog + ' ' + style.Dialog}> You will not be eligible to donate blood or platelets if you</DialogTitle>
        <DialogContent className={style.contentDialog + ' ' + style.Dialog}>
          <DialogContentText className={style.contentDialog + ' ' + style.Dialog}>
            <li>Have tested positive for hepatitis B or hepatitis C, lived with or had sexual contact in the past 12 months with anyone who has hepatitis B or symptomatic hepatitis C.</li>
            <li>Have ever had a positive test for the AIDS virus.</li>
            <li>Have used injectable drugs, including anabolic steroids, unless prescribed by a physician in the past 3 months.</li>

            <h4><b>Important Notes</b></h4>
            <li>Platelet donors may donate once every seven days, not to exceed six times in any eight-week period</li>
            <li>COVID-19 convalescent plasma must only be collected from recovered individuals if they are eligible to donate blood.</li>
            <li>Individuals must have had a prior diagnosis of COVID-19 documented by a laboratory test and meet other donor criteria.</li>
            <li>Individuals must have complete resolution of symptoms for at least 14 days prior to donation.</li>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={style.contentDialog + ' ' + style.Dialog}>
          <ButtonDialog className={style.buttonsDialog} onClick={handleDisagree} color="primary">
            Disagree
      </ButtonDialog>
          <ButtonDialog className={style.buttonsDialog} onClick={handleAgree} color="primary">
            Agree
      </ButtonDialog>
        </DialogActions>
      </Dialog>
      {
        agree === true ? (
          <div className="content">
            <br></br>
            <Grid>
              <Row>
                <Col md={12}>
                  <Card className={style.label}
                    title="Donor"
                    content={
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <FormGroup controlId="name" bsSize="large">
                              <ControlLabel className={style.label}>Full Name <span className={style.require}>*</span> </ControlLabel>
                              <FormControl
                                autoFocus
                                type="text"
                                value={name}
                                name="Name"
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter your fullname"
                                //required
                              />
                            </FormGroup>
                          </Col>

                          <Col md={6}>
                            <FormGroup controlId="email" bsSize="large">
                              <ControlLabel className={style.label}>Email <span className={style.require}>*</span></ControlLabel>
                              <FormControl
                                autoFocus
                                type="email"
                                value={email}
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your Email"
                                //required
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <FormGroup controlId="text" bsSize="large">
                              <ControlLabel className={style.label}>Mobile <span className={style.require}>*</span></ControlLabel>
                              <FormControl
                                value={mobile}
                                onChange={e => setMobile(e.target.value)}
                                type="text"
                                name="mobile"
                                placeholder="Enter your Mobile number"
                                //required
                              />
                            </FormGroup>
                          </Col>

                          <Col md={6}>
                            <FormGroup controlId="text" bsSize="large">
                              <ControlLabel className={style.label}>Age <span className={style.require}>*</span></ControlLabel>
                              <FormControl
                                value={age}
                                onChange={e => setAge(e.target.value)}
                                type="number"
                                name="age"
                                placeholder="Enter your age"
                                //required
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <FormGroup controlId="address" bsSize="large">
                          <ControlLabel className={style.label}>Address</ControlLabel>
                          <FormControl
                            autoFocus
                            type="address"
                            value={address}
                            name="address"
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Enter your address"
                            //required
                          />
                        </FormGroup>

                        <Row>
                          <Col md={6}>
                            <FormGroup controlId="donationDate" bsSize="large">
                              <ControlLabel className={style.label}>Last donation date <span className={style.require}>*</span></ControlLabel>
                              <FormControl
                                autoFocus
                                type="date"
                                value={donationDate}
                                name="donationDate"
                                data-date-format="dd/mm/yyyy"
                                format="dd/mm/yyyy"
                                onChange={e => setDonationDate(e.target.value)}
                                //required
                              />
                            </FormGroup>
                          </Col>

                          <Col md={6}>
                            <FormGroup controlId="recoveryDate" bsSize="large">
                              <ControlLabel className={style.label}>Recovery date <span className={style.require}>*</span></ControlLabel>
                              <FormControl
                                autoFocus
                                type="date"
                                value={recoveryDate}
                                name="recoveryDate"
                                data-date-format="dd/mm/yyyy"
                                format="dd/mm/yyyy"
                                onChange={e => setRecoveryDate(e.target.value)}
                                //required
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <FormGroup className={style.radioButtons} controlId="text" bsSize="large">
                          <ControlLabel className={style.label}>Blood Type <span className={style.require}>*</span></ControlLabel>
                          {bloodTypes.map((val) => {
                            return (
                              <Radio
                                number={val}
                                key={val}
                                option={val}
                                name="bloodTypes"
                                onChange={handleRadio}
                                label={val}
                                //required
                              />
                            );
                          })}
                        </FormGroup>

                        <FormGroup className={style.radioButtons} controlId="text" bsSize="large">
                          <ControlLabel className={style.label}>Chronic Diseases</ControlLabel>
                          {chronicDiseases.map((val) => {
                            return (
                              <Checkbox
                                number={val}
                                key={val}
                                name={val}
                                label={val}
                                checked={checkedItems[val]}
                                onChange={handleDisease}
                              />
                            );
                          })}
                        </FormGroup>

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
                            //required
                            placeholder="Select your location on the map"
                          />
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
            </Grid>
          </div>
        ) : (
            agree === false ? (
              <div className="content">
                <Grid>
                  <Row>
                    <Col md={12}>
                      Thank you for your time.
                  </Col>
                  </Row>
                </Grid>
              </div>
            ) : (
                ''
              )
          )
      }
    </div>
  );
}