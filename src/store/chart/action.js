import { historyFeed } from "./../../service/api/history";
import { setSocketConnection } from "./../../store/chart/action";

export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const GET_HISTORY_DATA = "GET_HISTORY_DATA";
export const CHANGE_INTERVAL = "CHANGE_INTERVAL";
export const GET_HISTORY_DATA_LINE = "GET_HISTORY_DATA_LINE";
export const SET_CHART_TYPE = "SET_CHART_TYPE";
export const IS_SOCKET_OPEN = "IS_SOCKET_OPEN";

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
