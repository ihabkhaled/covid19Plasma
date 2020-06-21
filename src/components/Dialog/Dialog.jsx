import React, { useEffect, useState, Suspense } from "react";
import ButtonDialog from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import style from "./Dialog.module.scss";

import Maps from "../../views/Maps";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function DialogCustom(props) {

    useEffect(() => {
        if(props.open) {
            if(props.open === true) {
                // showHeatMap();
            } else {
            }
        } else {
        }
    },[props.open]);

    const script = document.createElement('script');
    const script2 = document.createElement('script');

    const showHeatMap = () => {

        script2.innerText = "locationsArr = '" + JSON.stringify(props.locations) + "'";
        document.body.appendChild(script2);

        script.id = "bingMaps";
        script.src = "https://www.bing.com/api/maps/mapcontrol?key=AqgmKUtfTPyfrncmMyD181gzU-0LlgISmXL1noS97GScNCtI3Ws8V38oHrt7uN4m&callback=loadMapScenario";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
    };

    const hideHeatMap = () => {
        props.setHeatMap(false);
    };

    const handleClose = () => {
        hideHeatMap();
    };

    return (
        <Dialog
            fullScreen
            open={props.open}
            onClose={handleClose}
            className={style.DialogCSS}
        >
            <DialogTitle className={style.headerDialog + ' ' + style.Dialog}> Heat Map </DialogTitle>
            <DialogContent className={style.contentDialog + ' ' + style.Dialog}>
                <DialogContentText className={style.contentDialog + ' ' + style.Dialog}>
                    <Suspense fallback={<CircularProgress />}>
                        <Maps
                            id={2}
                            zoom={10}
                            donorsPositions={props.locations}
                        />
                    </Suspense>
                    {/* <div id="myMap2" className={style.DialogSize}></div> */}
                </DialogContentText>
            </DialogContent>
            <DialogActions className={style.contentDialog + ' ' + style.Dialog}>
                <ButtonDialog className={style.buttonsDialog} onClick={handleClose} color="primary">
                    Close
                </ButtonDialog>
            </DialogActions>
        </Dialog>
    );
};