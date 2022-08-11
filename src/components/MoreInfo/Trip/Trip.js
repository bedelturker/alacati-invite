import React from 'react'

// Info PDFs
import PracticalInfo from "../../../assets/InfoPack/Alacati-PracticalInfo.pdf"
import Option1 from "../../../assets/InfoPack/Alacati-Option1.pdf"
import Option2 from "../../../assets/InfoPack/Alacati-Option2.pdf"

// Media
import DownloadIcon from "../../../assets/Icons/download-regular.svg";
import TrottersQR from "../../../assets/QR/trotters.png";
import ChillersQR from "../../../assets/QR/chillers.png";

const Trip = () => {

  return (
    <div className="more_info_trip">
        <div className="more_info_trip_title">
          Planning your trip
        </div>
        <div className="more_info_trip_content">
          <div className="more_info_trip_content_practical">
            <span>We gathered a handful of practical information:</span>
            <a href={PracticalInfo} target="_blank" className="wrapper_link">
              <div 
                className="more_info_trip_content_practical_file"
              >
                <img 
                  src={DownloadIcon}
                  alt="Download Icon"
                />
                <span>General Information Booklet</span>
              </div>
            </a>
          </div>
          <div className="more_info_trip_content_options">
            <span>We also created two options for you to plan out your trip to Alaçatı:</span>
            <div className="more_info_trip_content_options_container">
              <div>
                <a href={Option1} target="_blank" className="wrapper_link">
                  <span>
                    <img 
                      src={DownloadIcon}
                      alt="Download Icon"
                    />
                    <b>Option 1:</b>&nbsp; 
                    Globetrotters of Turkey
                  </span>
                </a>
                <div 
                  className="qr"
                  onClick={() => window.open("https://chat.whatsapp.com/FGrzwaZlejV6KQSzmJIrRh")}
                >
                  <span>Join the Whatsapp Group!</span>
                  <img 
                    alt="trotters QR"
                    src={TrottersQR}
                  />
                </div>
              </div>
              <div>
                <a href={Option2} target="_blank" className="wrapper_link">
                  <span>
                      <img 
                        src={DownloadIcon}
                        alt="Download Icon"
                      />
                      <b>Option 2:</b>&nbsp;
                      Chillers of Turkey
                    </span>
                </a>
                <div 
                  className="qr"
                  onClick={() => window.open("https://chat.whatsapp.com/K55Ne41XlJC48aL2eOVLCj")}
                >
                  <span>Join the Whatsapp Group!</span>
                  <img 
                    alt="chillers QR"
                    src={ChillersQR}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Trip