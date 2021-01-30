import { historyFeed } from "./../../service/api/history";

export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const GET_HISTORY_DATA = "GET_HISTORY_DATA";

export function changeCurrency(currency) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_CURRENCY,
      payload: currency,
    });
  };
}

export function getHistoryChartData(type, pair, interval, limit) {
  return (dispatch) => {
    historyFeed(type, pair, interval, limit).then((data) => {
      const dataArray = [];
      data.data.forEach((candle) => {
        const dataObject = {
          time: candle[0] / 1000,
          open: candle[1],
          high: candle[2],
          low: candle[3],
          close: candle[4],
        };
        dataArray.push(dataObject);
      });
      dispatch({
        type: GET_HISTORY_DATA,
        payload: dataArray,
      });
    });
  };
}
