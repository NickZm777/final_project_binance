import React, { Fragment, useEffect, useState } from "react";
import { Chart } from "./styled";
import { getHistoryChartDataLine } from "../../../store/chart/action";

export default function ChartComponentLine(props) {
  const {
    currentCurrency,
    currentInterval,
    getHistoryChartData,
    historyDataLine,
  } = props;

  useEffect(() => {
    getHistoryChartDataLine("candle", currentCurrency, currentInterval, "500");
  }, [currentCurrency, currentInterval]);

    const options = {
      color: '#f48fb1',
      lineStyle: 0,
      lineWidth: 1,
      crosshairMarkerVisible: true,
      crosshairMarkerRadius: 6,
      lineType: 1,
      },

//   const lineSeries = [
//     {
//       data: historyDataLine,
//     },
//   ];

//   return (
//     <Fragment>
//       <Chart>
//         <Graph
//           options={options}
//           lineSeries={lineSeries}
//           autoWidth
//           autoHeight
//         />
//       </Chart>
//     </Fragment>
//   );
// }
