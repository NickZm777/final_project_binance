import { BASE_URL } from "./../../constans/binance";
import axios from "axios";

function historyFeed(type, pair, interval, limit) {
  return axios({
    method: "GET",
    url: `${BASE_URL}api/v1/klines?symbol=${pair}&interval=${interval}&limit=${limit}`,
  });
}

export { historyFeed };
