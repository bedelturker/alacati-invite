import React from 'react'

// MUI
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Media
import CheersImg from "../../../assets/HGImages/yay-see-you.png"
import SadImg from "../../../assets/HGImages/we-are-sad.png"
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
                {attending 
                    ? <span>&#128526;&ensp;All Done&ensp;&#128170;</span>
                    : <span>&#128563;&ensp;Thank you&ensp;&#128148;</span>
                }
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
                    src={attending ? CheersImg : SadImg}
                />
            </div>
        </Dialog>
    </div>
  )
}

export default RsvpModal