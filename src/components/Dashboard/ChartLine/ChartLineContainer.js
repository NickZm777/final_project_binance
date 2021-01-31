import ChartComponentLine from "./index.jsx";
import { connect } from "react-redux";
import { getHistoryChartDataLine } from "../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    historyDataLine: state.chart.historyDataLine,
  };
};

const mapDispatchToProps = {
  getHistoryChartDataLine,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponentLine);
