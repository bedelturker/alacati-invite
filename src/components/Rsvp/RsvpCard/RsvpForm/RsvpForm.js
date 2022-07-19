import React, { useState } from 'react'

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const RsvpForm = () => {

    // Constant
    const comingText = "Yes, I will attend with all the enthusiasm I have in my body!";
    const notComingText = "No, it is with extreme pain in my heart but I cannot attend...";

    // Data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isComing, setIsComing] = useState("yes")

  return (
    <div className="rsvp_form">
        <Box 
            component="form"
            noValidate
            autoComplete="off"
            sx={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-evenly",
                marginTop: "5rem"
            }}
        >
            <div className="rsvp_form_textField">
                <div className="rsvp_form_textField_item">
                    {/* <span className="rsvp_form_label">First Name</span> */}
                    <TextField 
                        required 
                        id="first-name-field" 
                        label="First Name" 
                        variant="standard"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="rsvp_form_textField_item">
                    {/* <span className="rsvp_form_label">Last Name</span> */}
                    <TextField 
                        required 
                        id="last-name-field" 
                        label="Last Name" 
                        variant="standard"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div className="rsvp_form_optionField">
                <span className="rsvp_form_label">Will you attend?</span>
                <RadioGroup
                    aria-labelledby="rsvp-radios"
                    name="rsvp"
                    value={isComing}
                    onChange={(e) => setIsComing(e.target.value)}
                >
                    <div className={`rsvp_radio ${isComing === "yes" ? "rsvp_radio_coming" : ""}`}>
                        <FormControlLabel 
                            value="yes" 
                            control={<Radio />} 
                            label={comingText} 
                        />
                    </div>
                    <div className={`rsvp_radio ${isComing !== "yes" ? "rsvp_radio_notComing" : ""}`}>
                        <FormControlLabel 
                            value="no" 
                            control={<Radio />} 
                            label={notComingText} 
                        />
                    </div>
                </RadioGroup>
            </div>
            {isComing === "yes" 
                ?   <div className="rsvp_form_paragraphField">
                        <span className="rsvp_form_label">
                            Do you have any allergies or special diets that we should know about?
                        </span>
                            <TextField
                                id="standard-multiline-static"
                                label="Any Requests?"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />
                    </div>
                : <div className="rsvp_form_sad">
                    <span>&#128546;</span>
                    <span>Okay...</span>
                </div>
            }
            <div className="rsvp_submit">
                <button
                    type="button" 
                    className={`rsvp_submit_btn ${firstName.length < 1 || lastName.length < 1 ? "rsvp_submit_btn_disabled" : ""}`}
                >
                    Submit
                </button>
            </div>
        </Box>
    </div>
  )
}

export default RsvpForm