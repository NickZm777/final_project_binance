import { CHANGE_CURRENCY, GET_HISTORY_DATA, CHANGE_INTERVAL } from "./action";

const ACTION_HANDLERS = {
  [CHANGE_CURRENCY]: (state, action) => {
    return { ...state, currentCurrency: action.payload };
  },
  [GET_HISTORY_DATA]: (state, action) => {
    return { ...state, historyData: action.payload };
  },
  [CHANGE_INTERVAL]: (state, action) => {
    return { ...state, currentInterval: action.payload };
  },
};

const initialState = {
  currentCurrency: "BTCUSDT",
  currentInterval: "1h",
  historyData: [],
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
