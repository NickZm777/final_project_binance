import IntervalComponent from "./index.js";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  setChartType,
} from "./../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    currentInterval: state.chart.currentInterval,
    isChartLine: state.chart.isChartLine,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  setChartType,
};

export default connect(mapStateToProps, mapDispatchToProps)(IntervalComponent);
