import { BASE_SOCKET_URL } from "./../constans/binance";
import { CURRENCY_ARRAY } from "./../constans/binance";

let currencySocket;

function createURL() {
  let api = "";
  CURRENCY_ARRAY.forEach((element) => {
    api = api + element + "@ticker/";
  });
  api = api.toLowerCase();
  let URL = BASE_SOCKET_URL + api;
  URL = URL.slice(0, -1);
  return URL;
}

function setSocketConnection(
  currentCurrency,
  changeSocketStatus,
  updateCurrencyObject,
  addSocketData
) {
  currencySocket = new WebSocket(createURL());
  currencySocket.onopen = function () {
    changeSocketStatus(true);
  };
  currencySocket.onmessage = (message) => {
    let data = JSON.parse(message.data);
    updateCurrencyObject(data.data);
    addSocketData(data.data);
  };
}

function disconnectSocketConnection(currencySocket) {
  currencySocket.close();
}

export { setSocketConnection, disconnectSocketConnection };
