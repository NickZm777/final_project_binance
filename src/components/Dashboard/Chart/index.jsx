import React, { Fragment, useEffect, useState } from "react";
import Graph from "kaktana-react-lightweight-charts";
import { Chart } from "./styled";

export default function ChartComponent(props) {
  const {
    getHistoryChartData,
    historyData,
    currentCurrency,
    currentInterval,
  } = props;

  // useEffect(() => {
  //   if (historyData.length === 0) {
  //     getHistoryChartData("candle", currentCurrency, "1h", "500");
  //   }
  // });

  useEffect(() => {
    getHistoryChartData("candle", currentCurrency, currentInterval, "500");
  }, [currentCurrency, currentInterval]);

  const options = {
    alignLabels: true,
    timeScale: {
      rightOffset: 12,
      barSpacing: 3,
      fixLeftEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      borderVisible: true,
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
          autoHeight
        />
      </Chart>
    </Fragment>
  );
}
