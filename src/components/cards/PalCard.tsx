/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const PalCard = ({ name, imgSource, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSource} alt="" />
      <div className="pal-name__container">
        <span className="pal-name">{name}</span>
      </div>
    </div>
  );
};

export default PalCard;
