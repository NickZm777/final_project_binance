import ListComponent from "./index.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    test: state.chart.test,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
