import React from "react";
import arrow from "../img/arrow.png";
import "../css/buttons.css";
export default function Buttons() {
  return (
    <section className="btn-group">
      <button className="btn details-btn">detaylı bilgi</button>
      <button className="btn btn-flex">
        <p>Tüm piyasalar</p>
        <img className="arrow-icon" src={arrow} alt="arrow" />
      </button>
    </section>
  );
}
