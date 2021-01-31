import { BASE_SOCKET_URL } from "./../constans/binance";

function setSocketConnection() {
  var socket = new WebSocket(BASE_SOCKET_URL);
}
