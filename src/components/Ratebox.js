import React from "react";
import change from "../img/change.png";
import "../css/ratebox.css";

export default function Ratebox() {
  return (
    <section>
      <article class="rate-form">
        <h3>döviz çevir</h3>
        <form>
          <div class="form-group">
            <input
              type="text"
              placeholder="1.000.000"
              class="form-control"
              name="name"
            />
            <img src={change} class="swap-btn form-control" alt="swap" />
            <input
              type="text"
              placeholder="6.789.456,99"
              class="form-control"
              name="name"
            />
          </div>
        </form>
      </article>
    </section>
  );
}
