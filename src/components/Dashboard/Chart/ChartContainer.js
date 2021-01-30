import ChartComponent from "./index.jsx";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
} from "../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    historyData: state.chart.historyData,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);
