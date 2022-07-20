import React from "react";

const InfoCard = ({ data }) => {
  return (
    <div className="info_card">
      {data.icon?.src && (
        <img
          src={data.icon.src}
          alt={data.icon.alt}
          className="info_card_icon d-none d-lg-block"
        />
      )}
      {Object.keys(data).map((key) => {
        if (data[key]) {
          if (key === JSON.parse('"dressCode"')) {
            return (
              <span className={`info_card_${key}`}>
                <b>Dress Code:</b> {data[key]}
              </span>
            );
          }
          if (key !== JSON.parse('"icon"')) {
            return <span className={`info_card_${key}`}>{data[key]}</span>;
          }
        }
      })}
    </div>
  );
};

export default InfoCard;
