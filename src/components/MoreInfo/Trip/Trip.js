import React from 'react'

// Info PDFs
import PracticalInfo from "../../../assets/InfoPack/Alacati-PracticalInfo.pdf"
import Option1 from "../../../assets/InfoPack/Alacati-Option1.pdf"
import Option2 from "../../../assets/InfoPack/Alacati-Option2.pdf"

// Media
import DownloadIcon from "../../../assets/Icons/download-regular.svg"

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
              <a href={Option1} target="_blank" className="wrapper_link">
                <span>
                  <b>Option 1:</b> Globetrotters of Turkey
                </span>
              </a>
              <a href={Option2} target="_blank" className="wrapper_link">
              <span><b>Option 2:</b> Chillers of Turkey</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Trip