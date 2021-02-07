import {
  CHANGE_CURRENCY,
  GET_HISTORY_DATA,
  CHANGE_INTERVAL,
  GET_HISTORY_DATA_LINE,
  SET_CHART_TYPE,
  IS_SOCKET_OPEN,
  INIT_CURRENCY_OBJECT,
  UPDATE_CURRENCY_OBJECT,
  ADD_SOCKET_DATA,
  CHANGE_THEME,
  ADD_NEW_CANDLE,
  UPDATE_CURENT_CANDLE,
} from "./action";

const ACTION_HANDLERS = {
  [CHANGE_CURRENCY]: (state, action) => {
    return {
      ...state,
      currentCurrency: action.payload,
      candleObject: {
        startCandleTime: 0,
        finishCandleTime: 0,
        openPrice: 0,
        closePrice: 0,
        highPrice: 0,
        lowPrice: 0,
      },
    };
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
  [INIT_CURRENCY_OBJECT]: (state, action) => {
    return { ...state, currencyObject: action.payload };
  },
  [UPDATE_CURRENCY_OBJECT]: (state, action) => {
    const key = action.payload["cur"];
    const ask = action.payload["ask"];
    const bid = action.payload["bid"];

    return {
      ...state,
      currencyObject: {
        ...state.currencyObject,
        [key]: { ask: ask, bid: bid },
      },
    };
  },
  [ADD_SOCKET_DATA]: (state, action) => {
    return { ...state, currentObject: action.payload };
  },
  [CHANGE_THEME]: (state, action) => {
    return { ...state, isThemeDark: action.payload };
  },
  [ADD_NEW_CANDLE]: (state, action) => {
    return {
      ...state,
      candleObject: {
        ...state.candleObject,
        startCandleTime: action.startCandleTime,
        finishCandleTime: action.finishCandleTime,
        openPrice: action.openPrice,
        closePrice: action.closePrice,
        highPrice: action.highPrice,
        lowPrice: action.lowPrice,
      },
    };
  },
  [UPDATE_CURENT_CANDLE]: (state, action) => {
    return {
      ...state,
      candleObject: {
        ...state.candleObject,
        closePrice: action.close,
        highPrice: action.high,
        lowPrice: action.low,
      },
    };
  },
};

const initialState = {
  currentCurrency: "BTCUSDT",
  currentInterval: "1h",
  historyData: [],
  historyDataLine: [],
  isChartLine: false,
  isSocketOpen: false,
  currencyObject: {},
  currentObject: {},
  isThemeDark: false,
  candleObject: {
    startCandleTime: 0,
    finishCandleTime: 0,
    openPrice: 0,
    closePrice: 0,
    highPrice: 0,
    lowPrice: 0,
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
