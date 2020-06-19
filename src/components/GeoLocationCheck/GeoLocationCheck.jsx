import React, { useEffect, useState } from "react";
import ButtonDialog from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import style from "./GeoLocationCheck.module.scss";
const isMobile = window.isMobile().mobile();

export default function GeoLocationCheck (props) {

    const [open,setOpen] = useState(false);

    useEffect(() => {
        if(props.open)
        {
            if(props.open === true)
            {
                setOpen(true);
            }
        }

    },[props.open]);

    const handleAgree = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleAgree}
            className={style.DialogCSS}
        >
            <DialogTitle className={style.headerDialog + ' ' + style.Dialog}> It seems location service is blocked from your browser</DialogTitle>
            <DialogContent className={style.contentDialog + ' ' + style.Dialog}>
                <DialogContentText className={style.contentDialog + ' ' + style.Dialog}>
                Test
                </DialogContentText>
            </DialogContent>
            <DialogActions className={style.contentDialog + ' ' + style.Dialog}>
                {/* <ButtonDialog className={style.buttonsDialog} onClick={handleDisagree} color="primary">
                    Check Permission
                </ButtonDialog> */}
                <ButtonDialog className={style.buttonsDialog} onClick={handleAgree} color="primary">
                    Resolved?
                </ButtonDialog>
            </DialogActions>
        </Dialog>
    );
};