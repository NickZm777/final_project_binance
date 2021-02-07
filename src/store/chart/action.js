import { CURRENCY_ARRAY } from "../../constans/binance";
import { historyFeed } from "./../../service/api/history";
import { setSocketConnection } from "./../../store/chart/action";

export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const GET_HISTORY_DATA = "GET_HISTORY_DATA";
export const CHANGE_INTERVAL = "CHANGE_INTERVAL";
export const GET_HISTORY_DATA_LINE = "GET_HISTORY_DATA_LINE";
export const SET_CHART_TYPE = "SET_CHART_TYPE";
export const IS_SOCKET_OPEN = "IS_SOCKET_OPEN";
export const INIT_CURRENCY_OBJECT = "INIT_CURRENCY_OBJECT";
export const UPDATE_CURRENCY_OBJECT = "UPDATE_CURRENCY_OBJECT";
export const ADD_SOCKET_DATA = "ADD_SOCKET_DATA";
export const CHANGE_THEME = "CHANGE_THEME";

export function changeCurrency(currency) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_CURRENCY,
      payload: currency,
    });
  };
}

export function changeInterval(interval) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_INTERVAL,
      payload: interval,
    });
  };
}

export function getHistoryChartData(type, pair, interval, limit) {
  return (dispatch) => {
    historyFeed(type, pair, interval, limit).then((data) => {
      const dataArray = [];
      const dataLineArray = [];
      data.data.forEach((candle) => {
        const dataObject = {
          time: candle[0] / 1000,
          open: candle[1],
          high: candle[2],
          low: candle[3],
          close: candle[4],
        };
        const dataLineObject = {
          time: candle[0] / 1000,
          value: candle[1],
        };
        dataArray.push(dataObject);
        dataLineArray.push(dataLineObject);
      });
      dispatch({
        type: GET_HISTORY_DATA,
        candleData: dataArray,
        lineData: dataLineArray,
      });
    });
  };
}

export function setChartType(isLine) {
  return (dispatch, getState) => {
    if (getState().chart.isChartLine === isLine) {
      return false;
    }
    dispatch({
      type: SET_CHART_TYPE,
      payload: isLine,
    });
  };
}

export function changeSocketStatus(isSocketOpen) {
  return (dispatch) => {
    dispatch({
      type: IS_SOCKET_OPEN,
      payload: isSocketOpen,
    });
  };
}

export function initCurrencyObject() {
  let currencyObject = {};
  CURRENCY_ARRAY.forEach((currency) => {
    currencyObject[currency] = {};
  });
  return (dispatch) => {
    dispatch({
      type: INIT_CURRENCY_OBJECT,
      payload: currencyObject,
    });
  };
}

export function updateCurrencyObject(object) {
  const obj = {
    cur: object.s,
    bid: object.b,
    ask: object.a,
  };
  return (dispatch) => {
    dispatch({
      type: UPDATE_CURRENCY_OBJECT,
      payload: obj,
    });
  };
}

export function addSocketData(object) {
  return (dispatch, getState) => {
    if (object["s"] === getState().chart.currentCurrency) {
      const interval = getState().chart.currentInterval;
      const myObject = {
        time: Math.round(object["E"] / 1000),
        open: object["a"],
        high: object["a"],
        low: object["a"],
        close: object["a"],
      };
      dispatch({
        type: ADD_SOCKET_DATA,
        payload: myObject,
      });
    } else {
      return false;
    }
  };
}

export function setThemeType(type) {
  return (dispatch, getState) => {
    if (getState().chart.isThemeDark !== type) {
      dispatch({
        type: CHANGE_THEME,
        payload: type,
      });
    }
  };
}
