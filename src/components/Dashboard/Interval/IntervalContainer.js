import IntervalComponent from "./index.js";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
} from "./../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    currentInterval: state.chart.currentInterval,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
};

export default connect(mapStateToProps, mapDispatchToProps)(IntervalComponent);
