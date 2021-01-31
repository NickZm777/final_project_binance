import ChartComponent from "./index.jsx";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
} from "../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentInterval: state.chart.currentInterval,
    currentCurrency: state.chart.currentCurrency,
    historyData: state.chart.historyData,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);
