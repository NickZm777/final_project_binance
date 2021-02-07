import ChartComponent from "./index.jsx";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  getHistoryChartDataLine,
} from "../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentInterval: state.chart.currentInterval,
    currentCurrency: state.chart.currentCurrency,
    historyData: state.chart.historyData,
    historyDataLine: state.chart.historyDataLine,
    isChartLine: state.chart.isChartLine,
    currentObject: state.chart.currentObject,
    candleObject: state.chart.candleObject,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);
