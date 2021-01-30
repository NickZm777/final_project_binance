import React, { Fragment, useEffect, useState } from "react";
import Graph from "kaktana-react-lightweight-charts";
import { Chart } from "./styled";

export default function ChartComponent(props) {
  const { getHistoryChartData, historyData, currentCurrency } = props;

  // useEffect(() => {
  //   if (historyData.length === 0) {
  //     getHistoryChartData("candle", currentCurrency, "1h", "500");
  //   }
  // });

  useEffect(() => {
    getHistoryChartData("candle", currentCurrency, "1h", "500");
  }, [currentCurrency]);

  const options = {
    alignLabels: true,
    timeScale: {
      rightOffset: 12,
      barSpacing: 3,
      fixLeftEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      borderVisible: false,
      borderColor: "#fff000",
      visible: true,
      timeVisible: true,
      secondsVisible: false,
    },
  };
  const candlestickSeries = [
    {
      data: historyData,
    },
  ];

  return (
    <Fragment>
      <Chart>
        <Graph
          options={options}
          candlestickSeries={candlestickSeries}
          autoWidth
          height={320}
        />
      </Chart>
    </Fragment>
  );
}
