import ChartComponent from "./index.jsx";
import { connect } from "react-redux";
import { getTest } from "../../../store/chart/action";

const mapStateToProps = (state) => {
  return {
    test: state.chart.test,
  };
};

const mapDispatchToProps = {
  getTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);
