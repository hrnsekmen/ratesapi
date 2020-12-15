import React from "react";
import arrow from "../img/arrow.png";
import "../css/buttons.css";
export default function Buttons() {
  return (
    <section className="btn-group">
      {/* dark btn */}
      <button className="btn details-btn btn-1">detaylı bilgi</button>
      {/* white btn */}
      <button className="btn btn-flex btn-2">
        <p>Tüm piyasalar</p>
        <img className="arrow-icon" src={arrow} alt="arrow" />
      </button>
    </section>
  );
}
