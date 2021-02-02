import ListComponent from "./index.jsx";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  changeSocketStatus,
  initCurrencyObject,
  updateCurrencyObject,
} from "./../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    currencyObject: state.chart.currencyObject,
    isSocketOpen: state.chart.isSocketOpen,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  changeSocketStatus,
  initCurrencyObject,
  updateCurrencyObject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
