import { BASE_URL } from "./../../constans/currencies";
import axios from "axios";

function historyFeed(type, pair, interval, limit) {
  return axios({
    method: "GET",
    url: `${BASE_URL}${type}?symbol=${pair}&interval=${interval}&limit=${limit}`,
  });
}

export { historyFeed };
