import React from 'react'

// MUI
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Media
import CheersImg from "../../../assets/HGImages/attending-success.png"
import closeIcon from "../../../assets/Icons/xmark-regular.svg"

/* 
    -----API-----
    attending: bool
    -------------
*/
const RsvpModal = ({
    rsvpModalOpen,
    closeRSVPModal,
    attending
}) => {
  return (
    <div>
        <Dialog
            open={rsvpModalOpen}
            onClose={closeRSVPModal}
            scroll={"paper"}
            aria-labelledby="rsvp-modal-title"
            aria-describedby="rsvp-modal-description"
            maxWidth="sm"
        >
            <DialogTitle 
                id="rsvp-modal-title"
                sx={{
                    fontWeight: "bold",
                    fontSize: "calc(2.2rem + .7vw)",
                }}
            >
                &#128526;&ensp;All Done&ensp;&#128170;
                <img 
                    alt="Close Icon"
                    src={closeIcon}
                    onClick={closeRSVPModal}
                    className="rsvp_modal_close"
                />
            </DialogTitle>
            <div className="rsvp_modal_content">
                <img 
                    alt={attending ? "Looking forwad to seeing you" : "We love you nonetheless"}
                    src={CheersImg}
                />
            </div>
        </Dialog>
    </div>
  )
}

export default RsvpModal