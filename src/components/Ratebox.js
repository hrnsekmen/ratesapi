import React, { useState } from "react";
import change from "../img/change.png";
import "../css/ratebox.css";
import { connect } from "react-redux";

const Ratebox = ({ USD, JPY, DKK, EUR, GBP, NOK }) => {
  const [firstValue, setFirstValue] = useState([]);
  const [secondValue, setSecondValue] = useState([]);
  const [baseRate, setBaseRate] = useState([]);

  React.useEffect(() => {
    setBaseRate(USD);
  }, [USD]);

  const handleFirstValue = (inputValue) => {
    const number = Number(inputValue);
    if (!isNaN(number)) {
      setFirstValue(number);
    }
    let parseInt = (baseRate * number).toFixed(4);
    setSecondValue(parseInt);
  };

  const handleSecondValue = () => {
    // test
  };
  return (
    <section>
      <article className="rate-form">
        <h3>döviz çevir</h3>
        <form>
          <div className="form-group">
            <div className="selection-input">
              <select
                className="select-box"
                onChange={(e) => {
                  const selectedBase = e.target.value;
                  setBaseRate(selectedBase);
                  setFirstValue([]);
                  setSecondValue([]);
                }}
              >
                <option value={USD}>USD</option>
                <option value={EUR}>EUR</option>
                <option value={JPY}>JPY</option>
                <option value={DKK}>DKK</option>
                <option value={GBP}>GBP</option>
                <option value={NOK}>NOK</option>
              </select>
              <input
                onChange={(e) => handleFirstValue(e.target.value)}
                type="text"
                placeholder="1.000.000"
                value={firstValue}
                className="form-control"
              />
            </div>

            {/* icon */}
            <img src={change} className="swap-btn form-control" alt="swap" />
            <div className="result-bar">
              <input
                onChange={(e) => handleSecondValue(e.target.value)}
                type="text"
                placeholder="7.8497"
                className="form-control"
                value={secondValue}
              />
              <div>
                <h2 className="tl-box">TL</h2>
              </div>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    USD: state.USD,
    JPY: state.JPY,
    DKK: state.DKK,
    EUR: state.EUR,
    GBP: state.GBP,
    NOK: state.NOK,
  };
};
export default connect(mapStateToProps)(Ratebox);
