import React from "react";
import change from "../img/change.png";
import "../css/ratebox.css";

export default function Ratebox() {
  return (
    <section>
      <article className="rate-form">
        <h3>döviz çevir</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="1.000.000"
              className="form-control"
              name="name"
            />
            <img src={change} className="swap-btn form-control" alt="swap" />
            <input
              type="text"
              placeholder="6.789.456,99"
              className="form-control"
              name="name"
            />
          </div>
        </form>
      </article>
    </section>
  );
}
