import React, { Fragment, useEffect, useState } from "react";
// import Graph from "kaktana-react-lightweight-charts";
import { createChart } from "lightweight-charts";
import { Chart } from "./styled";

export default function ChartComponent(props) {
  const {
    getHistoryChartData,
    historyData,
    currentCurrency,
    currentInterval,
    isChartLine,
    historyDataLine,
    currentObject,
  } = props;

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

  const areaSeries = [
    {
      data: historyDataLine,
    },
  ];

  let chart;

  function initGraph() {
    chart = createChart(document.body, {
      width: 400,
      height: 300,
    });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(historyData);
    graphRenderFunction(true);
    setCandlestickSeries(candlestickSeries);
  }

  function updateGraph(object) {
    candlestickSeries.update(object);
  }

  const [isGraphrender, graphRenderFunction] = useState(false);
  const [mycandlestickSeries, setCandlestickSeries] = useState([]);

  useEffect(() => {
    if (!isGraphrender && historyData.length !== 0) {
      initGraph();
    }
  }, [historyData]);

  useEffect(() => {
    getHistoryChartData("candle", currentCurrency, currentInterval, "500");
  }, [currentCurrency, currentInterval]);

  useEffect(() => {
    if (
      mycandlestickSeries.length !== 0 &&
      Object.keys(currentObject).length !== 0
    ) {
      mycandlestickSeries.update(currentObject);
    }
  }, [currentObject]);

  return (
    <Fragment>
      <Chart className="graph"></Chart>
    </Fragment>
  );
}
