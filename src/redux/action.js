import axios from "axios";

export const getCurrentRates = () => (dispatch) => {
  // get usd

  axios
    .get("https://api.ratesapi.io/api/latest?base=USD&symbols=TRY")
    .then((rates) => {
      dispatch({
        type: "GET_CURRENT_USD",
        payload: rates.data.rates.TRY.toFixed(4),
      });
    })
    .catch((err) => console.log(err.message));

  // get jpy
  axios
    .get("https://api.ratesapi.io/api/latest?base=JPY&symbols=TRY")
    .then((rates) => {
      dispatch({
        type: "GET_CURRENT_JPY",
        payload: rates.data.rates.TRY.toFixed(4),
      });
    })
    .catch((err) => console.log(err.message));

  //get dkk
  axios
    .get("https://api.ratesapi.io/api/latest?base=DKK&symbols=TRY")
    .then((rates) => {
      dispatch({
        type: "GET_CURRENT_DKK",
        payload: rates.data.rates.TRY.toFixed(4),
      });
    })
    .catch((err) => console.log(err.message));

  //get eur
  axios
    .get("https://api.ratesapi.io/api/latest?base=EUR&symbols=TRY")
    .then((rates) => {
      dispatch({
        type: "GET_CURRENT_EUR",
        payload: rates.data.rates.TRY.toFixed(4),
      });
    })
    .catch((err) => console.log(err.message));

  // get gbp
  axios
    .get("https://api.ratesapi.io/api/latest?base=GBP&symbols=TRY")
    .then((rates) => {
      dispatch({
        type: "GET_CURRENT_GBP",
        payload: rates.data.rates.TRY.toFixed(4),
      });
    })
    .catch((err) => console.log(err.message));

  // get nok
  axios
    .get("https://api.ratesapi.io/api/latest?base=NOK&symbols=TRY")
    .then((rates) => {
      dispatch({
        type: "GET_CURRENT_NOK",
        payload: rates.data.rates.TRY.toFixed(4),
      });
    })
    .catch((err) => console.log(err.message));
};
