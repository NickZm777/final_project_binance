import ListComponent from "./index.jsx";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
} from "./../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.chart.currentCurrency,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
