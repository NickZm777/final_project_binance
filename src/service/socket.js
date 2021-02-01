import { BASE_SOCKET_URL } from "./../constans/binance";

let currencySocket;

function setSocketConnection(currentCurrency, changeSocketStatus) {
  currencySocket = new WebSocket(
    `${BASE_SOCKET_URL}/stream?streams=ethbtc@ticker/ethbtc@kline_1m`
  );
  currencySocket.onopen = function () {
    changeSocketStatus(true);
  };
  currencySocket.onmessage = (message) => {
    // console.log(JSON.parse(message.dыata));
  };
}

function disconnectSocketConnection(currencySocket) {
  currencySocket.close();
}

export { setSocketConnection, disconnectSocketConnection };
