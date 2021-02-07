import IntervalComponent from "./index.js";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  setChartType,
  setThemeType,
} from "./../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    currentInterval: state.chart.currentInterval,
    isChartLine: state.chart.isChartLine,
    isThemeDark: state.chart.isThemeDark,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  setChartType,
  setThemeType,
};

export default connect(mapStateToProps, mapDispatchToProps)(IntervalComponent);
