import React, { useState, useEffect } from 'react'

// MUI
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';

// Our Components
import Alert from "../../Utils/Alert/Alert"

// Utils
import copyText from "../../Utils/copyText";

// Media
import copyIcon from "../../../assets/Icons/copy-regular.svg"

const Gift = () => {
  const [ibanCopied, setIbanCopied] = useState(false);

  /* ALERT */
  const copyAlertOpen = () => {
    setIbanCopied(true);
  }

  const copyAlertClose = () => {
    setIbanCopied(false);
  }


  /* ----- */

  useEffect(() => {
    if (ibanCopied) {
      setTimeout(() => {
        copyAlertClose();
      }, 2000)
    }
  }, [ibanCopied])
  
  return (
    <div className="more_info_gift">
        <Snackbar 
          open={ibanCopied}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={6000} 
          onClose={copyAlertClose}
        >
          <Alert 
            onClose={copyAlertClose} 
            severity="success" 
            sx={{ 
              width: '100%',
              fontSize: "calc(1.3rem + .3vw)",
              fontWeight: "bold"
            }}
          >
            Copied to clipboard!
          </Alert>
        </Snackbar>
      <div className="more_info_gift_title">
        Gift Information
      </div>
      <div className="more_info_gift_content">
        <span>&#127864;&ensp;The most beautiful gift for us is your warm attendance&ensp;&#127881;</span>
        <span>&#128155;&ensp;All we need is <u>your love</u>&ensp;&#128153;</span>
        <span>&#128107;&ensp;If you still wish to spoil us and you wish to contribute to our future love nest&ensp;&#127919;</span>
        <span>&#128588;&ensp;Please send us your gift through&ensp;&#128396;</span>
        <span 
          style={{margin: "2rem 0"}}
          onClick={() => copyText("iban-no", setIbanCopied)}
        >
          <b id="iban-no">BE28 3900 8054 5320</b>
          {!ibanCopied &&
            <Tooltip
              title="Copy to clipboard"
            >
              <img 
                src={copyIcon}
                alt="Copy Icon"
                height="2rem"
                id="iban-no-copy-icon"
              />
            </Tooltip>
          }
        </span>
        <span style={{fontFamily: "Cookie", fontSize: "30px"}}>Hazal & Gilles</span>
      </div>
    </div>
  )
}

export default Gift