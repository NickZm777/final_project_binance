import { combineReducers } from "redux";
import chart from "./chart/reducers";

export default () =>
  combineReducers({
    chart: chart,
  });
