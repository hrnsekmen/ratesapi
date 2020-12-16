import React from "react";
import usd from "../img/usd.png";
import eur from "../img/eur.png";
import dkk from "../img/dkk.png";
import gbp from "../img/gbp.png";
import nok from "../img/nok.png";
import jpy from "../img/jpy.png";
import "../css/ratelist.css";
import { connect } from "react-redux";
import { getCurrentRates } from "../redux/action";

const Rates = ({ getCurrentRates, USD, JPY, DKK, EUR, GBP, NOK }) => {
  React.useEffect(() => {
    getCurrentRates();
  }, [getCurrentRates]);
  return (
    <>
      <section>
        <div className="column-container">
          {/* COL 1 */}
          <div className="col-1">
            {/* Rate 1 */}
            <div className="container">
              <img src={usd} alt="img" className="box-0 img-container" />

              <div className="box box-1">
                <h2>usd</h2>
                <p>amerikan doları</p>
              </div>

              <div className="rate-container">
                <div className="box box-2">
                  <h2 className="rate-spec">alış</h2>
                  <p className="rate-value">{USD}</p>
                </div>

                <div className="box box-3">
                  <h2 className="rate-spec">satış</h2>
                  <p className="rate-value">{USD}</p>
                </div>
              </div>
            </div>
            {/* LINE */}
            <div className="rate-line"></div>
            {/* END OF SINGLE RATE */}
            {/* Rate 2 */}
            <div className="container">
              <img src={eur} alt="img" className="box-0 img-container" />
              <div className="box box-1">
                <h2>eur</h2>
                <p>avrupa para birimi</p>
              </div>
              <div className="rate-container">
                <div className="box box-2">
                  <h2 className="rate-spec">alış</h2>
                  <p className="rate-value">{EUR}</p>
                </div>
                <div className="box box-3">
                  <h2 className="rate-spec">satış</h2>
                  <p className="rate-value">{EUR}</p>
                </div>
              </div>
            </div>
            {/* LINE */}
            <div className="rate-line"></div>
            {/* END OF SINGLE RATE */}
            {/* Rate 3 */}
            <div className="container">
              <img src={jpy} alt="img" className="box-0 img-container" />
              <div className="box box-1">
                <h2>jpy</h2>
                <p>japon yeni</p>
              </div>
              <div className="rate-container">
                <div className="box box-2">
                  <h2 className="rate-spec">alış</h2>
                  <p className="rate-value">{JPY}</p>
                </div>
                <div className="box box-3">
                  <h2 className="rate-spec">satış</h2>
                  <p className="rate-value">{JPY}</p>
                </div>
              </div>
            </div>
            {/* LINE */}
            <div className="rate-line"></div>
            {/* END OF SINGLE RATE */}
          </div>
          {/* END OF COL-1 */}
          {/* COL 2 */}
          <div className="col-1">
            {/* Rate 1 */}
            <div className="container">
              <img src={gbp} alt="img" className="box-0 img-container" />
              <div className="box box-1">
                <h2>gbp</h2>
                <p>İngiliz sterlini</p>
              </div>
              <div className="rate-container">
                <div className="box box-2">
                  <h2 className="rate-spec">alış</h2>
                  <p className="rate-value">{GBP}</p>
                </div>
                <div className="box box-3">
                  <h2 className="rate-spec">satış</h2>
                  <p className="rate-value">{GBP}</p>
                </div>
              </div>
            </div>
            {/* LINE */}
            <div className="rate-line"></div>
            {/* END OF SINGLE RATE */}
            {/* Rate 2 */}
            <div className="container">
              <img src={dkk} alt="img" className="box-0 img-container" />
              <div className="box box-1">
                <h2>dkk</h2>
                <p>danimarka kronu</p>
              </div>
              <div className="rate-container">
                <div className="box box-2">
                  <h2 className="rate-spec">alış</h2>
                  <p className="rate-value">{DKK}</p>
                </div>
                <div className="box box-3">
                  <h2 className="rate-spec">satış</h2>
                  <p className="rate-value">{DKK}</p>
                </div>
              </div>
            </div>
            {/* LINE */}
            <div className="rate-line"></div>
            {/* END OF SINGLE RATE */}
            {/* Rate 3 */}
            <div className="container">
              <img src={nok} alt="img" className="box-0 img-container" />
              <div className="box box-1">
                <h2>nok</h2>
                <p>norveç kronu</p>
              </div>
              <div className="rate-container">
                <div className="box box-2">
                  <h2 className="rate-spec">alış</h2>
                  <p className="rate-value">{NOK}</p>
                </div>
                <div className="box box-3">
                  <h2 className="rate-spec">satış</h2>
                  <p className="rate-value">{NOK}</p>
                </div>
              </div>
            </div>
            {/* LINE */}
            <div className="rate-line"></div>
            {/* END OF SINGLE RATE */}
          </div>
          {/* END OF COL-2 */}
        </div>
      </section>
    </>
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
export default connect(mapStateToProps, { getCurrentRates })(Rates);
