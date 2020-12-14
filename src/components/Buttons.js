import React from "react";
import arrow from "../img/arrow.png";
import "../css/buttons.css";
export default function Buttons() {
  return (
    <section className="btn-group">
      <button className="btn details-btn">detaylı bilgi</button>
      <button class="btn btn-flex">
        <p>Tüm piyasalar</p>
        <img class="arrow-icon" src={arrow} alt="arrow" />
      </button>
    </section>
  );
}
