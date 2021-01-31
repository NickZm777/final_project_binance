import {
  CHANGE_CURRENCY,
  GET_HISTORY_DATA,
  CHANGE_INTERVAL,
  GET_HISTORY_DATA_LINE,
  SET_CHART_TYPE,
  IS_SOCKET_OPEN,
} from "./action";

const ACTION_HANDLERS = {
  [CHANGE_CURRENCY]: (state, action) => {
    return { ...state, currentCurrency: action.payload };
  },
  [GET_HISTORY_DATA]: (state, action) => {
    return {
      ...state,
      historyData: action.candleData,
      historyDataLine: action.lineData,
    };
  },
  [CHANGE_INTERVAL]: (state, action) => {
    return { ...state, currentInterval: action.payload };
  },
  [GET_HISTORY_DATA_LINE]: (state, action) => {
    return { ...state, historyDataLine: action.payload };
  },
  [SET_CHART_TYPE]: (state, action) => {
    return { ...state, isChartLine: action.payload };
  },
  [IS_SOCKET_OPEN]: (state, action) => {
    return { ...state, isSocketOpen: action.payload };
  },
};

const initialState = {
  currentCurrency: "BTCUSDT",
  currentInterval: "1h",
  historyData: [],
  historyDataLine: [],
  isChartLine: false,
  isSocketOpen: false,
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
