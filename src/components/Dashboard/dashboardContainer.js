import { DashboardComponent } from "./index.jsx";
import { connect } from "react-redux";
import {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  changeSocketStatus,
  initCurrencyObject,
  updateCurrencyObject,
  addSocketData,
  setThemeType,
} from "../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    currencyObject: state.chart.currencyObject,
    isSocketOpen: state.chart.isSocketOpen,
    candleObject: state.chart.candleObject,
    isThemeDark: state.chart.isThemeDark,
  };
};

const mapDispatchToProps = {
  changeCurrency,
  getHistoryChartData,
  changeInterval,
  changeSocketStatus,
  initCurrencyObject,
  updateCurrencyObject,
  addSocketData,
  setThemeType,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
