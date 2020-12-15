const initialState = {
  USD: "",
  JPY: "",
  DKK: "",
  EUR: "",
  GBP: "",
  NOK: "",
};

export default function reducer(state = initialState, action) {
  if (action.type === "GET_CURRENT_USD") {
    return {
      ...state,
      USD: action.payload,
    };
  }
  if (action.type === "GET_CURRENT_JPY") {
    return {
      ...state,
      JPY: action.payload,
    };
  }
  if (action.type === "GET_CURRENT_DKK") {
    return {
      ...state,
      DKK: action.payload,
    };
  }
  if (action.type === "GET_CURRENT_EUR") {
    return {
      ...state,
      EUR: action.payload,
    };
  }
  if (action.type === "GET_CURRENT_GBP") {
    return {
      ...state,
      GBP: action.payload,
    };
  }
  if (action.type === "GET_CURRENT_NOK") {
    return {
      ...state,
      NOK: action.payload,
    };
  }
  return state;
}
