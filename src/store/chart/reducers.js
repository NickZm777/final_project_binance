import { CHANGE_CURRENCY, GET_HISTORY_DATA } from "./action";

const ACTION_HANDLERS = {
  [CHANGE_CURRENCY]: (state, action) => {
    return { ...state, currentCurrency: action.payload };
  },
  [GET_HISTORY_DATA]: (state, action) => {
    return { ...state, historyData: action.payload };
  },
};

const initialState = {
  currentCurrency: "BTCUSDT",
  historyData: [],
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
