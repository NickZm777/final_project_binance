import { BASE_SOCKET_URL } from "./../constans/binance";

let currencySocket;

function setSocketConnection(
  currentCurrency,
  changeSocketStatus,
  updateCurrencyObject
) {
  currencySocket = new WebSocket(
    `${BASE_SOCKET_URL}/stream?streams=ethusdt@ticker/btcusdt@ticker/btceur@ticker/etheur@ticker`
  );
  currencySocket.onopen = function () {
    changeSocketStatus(true);
  };
  currencySocket.onmessage = (message) => {
    let data = JSON.parse(message.data);
    updateCurrencyObject(data.data);
  };
}

function disconnectSocketConnection(currencySocket) {
  currencySocket.close();
}

export { setSocketConnection, disconnectSocketConnection };
