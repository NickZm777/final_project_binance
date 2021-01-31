import React, { Fragment, useEffect, useState } from "react";
import Graph from "kaktana-react-lightweight-charts";
import { Chart } from "./styled";

export default function ChartComponent(props) {
  const {
    getHistoryChartData,
    historyData,
    currentCurrency,
    currentInterval,
    isChartLine,
    historyDataLine,
  } = props;

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

  const lineSeries = [
    {
      data: historyDataLine,
    },
  ];

  return (
    <Fragment>
      <Chart>
        <Graph
          options={options}
          candlestickSeries={isChartLine ? null : candlestickSeries}
          lineSeries={isChartLine && lineSeries}
          autoWidth
          autoHeight
        />
      </Chart>
    </Fragment>
  );
}
