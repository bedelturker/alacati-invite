import React, { useState, useEffect, forwardRef } from "react";

// MUI
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Snackbar from '@mui/material/Snackbar';

// Our Components
import Alert from "../../../Utils/Alert/Alert";

// Firebase
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../../../utils/firebase";

// Helpful Functions
import capitalize from '../../../../utils/capitalize'

const RsvpForm = ({
  openRSVPModal,
  setAttending
}) => {
  // Constant
  const comingText =
    "Yes, I will attend with all the enthusiasm I have in my body!";
  const notComingText =
    "No, it is with extreme pain in my heart but I cannot attend...";


  // Filling the name automatically from invite
  const isBrowser = typeof window !== "undefined";

  const location = isBrowser && window.location;
  const queryParams = new URLSearchParams(location.search);
  
  const paramName = capitalize(queryParams.get("first"));
  const paramLastName =  capitalize(queryParams.get("last"));

  // Submit State
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keeping track of full name of the RSVP'er
  const [fullName, setFullName] = useState("")

  /* ALERT */
  
  // Alert Types
  const [existsAlert, setExistsAlert] = useState(false);
  const [somethingWrong, setSomethingWrong] = useState(false)

  // Alert Functions
  const handleAlertOpen = (type) => {
    setIsSubmitting(false);
    if (type === "user_exists") {
      setExistsAlert(true); 
    } else {
      setSomethingWrong(true);
    }
  };

  const handleAlertClose = (type) => {
    if (type === "user_exists") {
      setExistsAlert(false); 
    } else {
      setSomethingWrong(false);
    }
  };

  /* ----- */

  /* RSVP SUBMISSION  */

    const emptyRSVP = {
      dateCreated: Timestamp.fromDate(new Date()),
      guest: {
        firstName: paramName || "",
        lastName: paramLastName || "",
      },
      plusOne: {
        firstName: "",
        lastName: ""
      },
      accomodation: "",
      requests: "",
      willAttend: "yes",
    }

    // Defining the invite response object
    const [inviteResponse, setInviteResponse] = useState(emptyRSVP);

    const clearRSVP = () => {
      setInviteResponse(emptyRSVP);
    }

    const sendRSVP = async () => {
      // Making sure that empty names are not submitted
      if (fullName.length > 0 ) {
        // Setting the submit spinner off
        setIsSubmitting(true);

        // Checking that new responder doesn't already exist
        const docRef = doc(db, "rsvp", fullName);
        const grabDoc = await getDoc(docRef);

        if (!grabDoc.exists()) {
          // Updating the RSVP time to now before sending it off
          setInviteResponse({
            ...inviteResponse, dateCreated: Timestamp.fromDate(new Date())
          });

          setAttending(inviteResponse.willAttend === "yes");

          // Add a new form in rsvp collection
          await setDoc(doc(db, "rsvp", fullName), inviteResponse)
            .then((res) => {
              clearRSVP();
              setIsSubmitting(false);
              openRSVPModal();
            })
            .catch((err) => {
              handleAlertOpen("something_wrong");
            });
        }
        // Giving a warning if user already exists
        else {
          handleAlertOpen("user_exists");
        }
      }
    }

  /* ----- */

  useEffect(() => {
    setFullName(inviteResponse.guest.firstName + " " + inviteResponse.guest.lastName);
  }, [inviteResponse.guest.firstName, inviteResponse.guest.lastName]);


  return (
    <div className="rsvp_form">
      {/* RSVP Exists Alert */}
        <Snackbar 
          open={existsAlert}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={6000} 
          onClose={() => handleAlertClose("user_exists")}
        >
          <Alert 
            onClose={() => handleAlertClose("user_exists")} 
            severity="error" 
            sx={{ 
              width: '100%',
              fontSize: "calc(1.3rem + .3vw)",
              fontWeight: "bold"
            }}
          >
            You have already RSVP'ed!
          </Alert>
        </Snackbar>

      {/* Submission Issue Alert */}
        <Snackbar 
          open={somethingWrong}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={6000} 
          onClose={() => handleAlertClose("something_wrong")}
        >
          <Alert 
            onClose={() => handleAlertClose("something_wrong")} 
            severity="error" 
            sx={{ 
              width: '100%',
              fontSize: "calc(1.3rem + .3vw)",
              fontWeight: "bold"
            }}
          >
            Something went wrong. Please try again.
          </Alert>
        </Snackbar>
      
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          marginTop: "5rem",
        }}
      >
        <div className="rsvp_form_textField">
          <div className="rsvp_form_textField_item">
            {/* <span className="rsvp_form_label">First Name</span> */}
            <TextField
              required
              fullWidth
              id="first-name-field"
              label="Your Name"
              variant="standard"
              value={inviteResponse.guest.firstName}  
              autoFocus={inviteResponse.guest.firstName > 0 ? true : false}
              InputLabelProps={{ shrink: inviteResponse.guest.firstName > 0 ? false : true }}  
              onChange={(e) => setInviteResponse({
                ...inviteResponse, guest: {
                  ...inviteResponse.guest, firstName: e.target.value
                }
              })}
            />
          </div>
          <div className="rsvp_form_textField_item">
            {/* <span className="rsvp_form_label">Last Name</span> */}
            <TextField
              required
              fullWidth
              id="last-name-field"
              label="Your Last Name"
              variant="standard"
              value={inviteResponse.guest.lastName}
              autoFocus={inviteResponse.guest.lastName > 0 ? true : false}
              InputLabelProps={{ shrink: inviteResponse.guest.lastName > 0 ? false : true }}  
              onChange={(e) => setInviteResponse({
                ...inviteResponse, guest: {
                  ...inviteResponse.guest, lastName: e.target.value
                }
              })}
              
            />
          </div>
        </div>
        <div className="rsvp_form_optionField">
          <span className="rsvp_form_label">Will you attend?</span>
          <RadioGroup
            aria-labelledby="rsvp-radios"
            name="rsvp"
            value={inviteResponse.willAttend}
            onChange={(e) => setInviteResponse({
              ...inviteResponse, willAttend: e.target.value
            })}
          >
            <div
              className={`rsvp_radio ${
                inviteResponse.willAttend === "yes" ? "rsvp_radio_coming" : ""
              }`}
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label={comingText}
              />
            </div>
            <div
              className={`rsvp_radio ${
                inviteResponse.willAttend !== "yes" ? "rsvp_radio_notComing" : ""
              }`}
            >
              <FormControlLabel
                value="no"
                control={<Radio />}
                label={notComingText}
              />
            </div>
          </RadioGroup>
        </div>
        {inviteResponse.willAttend === "yes" ? (
          <>
          <div className="rsvp_form_plusOne">
            <span className="rsvp_form_label">
              Do you also want to register your partner?
            </span>
            <div className="rsvp_form_textField">
              <div className="rsvp_form_textField_item">
              {/* <span className="rsvp_form_label">First Name</span> */}
              <TextField
                fullWidth
                id="plusOne-first-name-field"
                label="First Name"
                variant="standard"
                value={inviteResponse.plusOne.firstName}
                onChange={(e) => setInviteResponse({
                  ...inviteResponse, plusOne: {
                    ...inviteResponse.plusOne, firstName: e.target.value
                  }
                })}
              />
              </div>
              <div className="rsvp_form_textField_item">
                <TextField
                  fullWidth
                  id="plusOne-last-name-field"
                  label="Last Name"
                  variant="standard"
                  value={inviteResponse.plusOne.lastName}
                  onChange={(e) => setInviteResponse({
                    ...inviteResponse, plusOne: {
                      ...inviteResponse.plusOne, lastName: e.target.value
                    }
                  })}
                  
                />
              </div>
            </div>
          </div>
          <div className="rsvp_form_hotel">
            <span className="rsvp_form_label">
              Where are you staying?
            </span>
            <div className="rsvp_form_textField">
              <div className="rsvp_form_textField_item" style={{width: "100%"}}>
              <TextField
                id="hotel-info"
                label="Hotel Name or Airbnb Address"
                variant="standard"
                value={inviteResponse.accomodation}
                onChange={(e) => setInviteResponse({
                  ...inviteResponse, accomodation: e.target.value
                })}
                fullWidth
              />
              </div>
            </div>
          </div>
          <div className="rsvp_form_paragraphField">
            <span className="rsvp_form_label">
              Do you have any allergies or special diets that we should know
              about?
            </span>
            <TextField
              id="standard-multiline-static"
              label="Any Requests?"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              value={inviteResponse.requests}
              onChange={(e) => setInviteResponse({
                  ...inviteResponse, requests: e.target.value
              })}
              inputLabelProps={{
                style: {
                  fontFamily: "Vollkorn",
                  fontSize: "10rem"
                }
              }}
            />
          </div>
          </>
        ) : (
          <div className="rsvp_form_sad">
            <span>&#128546;</span>
            <span>Okay...</span>
          </div>
        )}
        <div className="rsvp_submit">
          <button
            type="button"
            className={`rsvp_submit_btn ${inviteResponse.willAttend === "yes" ? "rsvp_submit_btn_yes" : "rsvp_submit_btn_no"}`}
            disabled={inviteResponse.guest.firstName.length < 1 || inviteResponse.guest.lastName.length < 1}
            onClick={sendRSVP}  
          >
            {isSubmitting 
              ? (
                <CircularProgress
                  size={20}
                  sx={{
                    color: 'white',
                  }}
                />
              )
              : "Submit"
            }
          </button>
        </div>
      </Box>
    </div>
  );
};

export default RsvpForm;
