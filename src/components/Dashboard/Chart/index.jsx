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
    candleObject,
  } = props;

  const areaSeries = [
    {
      data: historyDataLine,
    },
  ];

  let chart;

  function initGraph() {
    chart = createChart(document.getElementById("chart"), {
      width: 1000,
      height: 440,
      alignLabels: true,
      timeScale: {
        rightOffset: 12,
        barSpacing: 3,
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: true,
        borderColor: "grey",
        visible: true,
        timeVisible: true,
        secondsVisible: false,
      },
    });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(historyData);
    graphRenderFunction(true);
    setCandlestickSeries(candlestickSeries);
  }

  const [isGraphrender, graphRenderFunction] = useState(false);
  const [mycandlestickSeries, setCandlestickSeries] = useState([]);

  useEffect(() => {
    if (!isGraphrender && historyData.length !== 0) {
      initGraph();
    }
  }, [historyData, isGraphrender]);

  useEffect(() => {
    if (historyData.length !== 0 && mycandlestickSeries.length !== 0) {
      mycandlestickSeries.setData(historyData);
    }
  }, [historyData]);

  useEffect(() => {
    getHistoryChartData("candle", currentCurrency, currentInterval, "500");
  }, [currentCurrency, currentInterval]);

  useEffect(() => {
    if (
      mycandlestickSeries.length !== 0 &&
      Object.keys(candleObject).length !== 0
    ) {
      const resultObject = {
        time: candleObject.startCandleTime,
        open: candleObject.openPrice,
        high: candleObject.highPrice,
        low: candleObject.lowPrice,
        close: candleObject.closePrice,
      };
      if (resultObject.time !== 0) {
        mycandlestickSeries.update(resultObject);
      }
    }
  }, [candleObject]);

  return (
    <Fragment>
      <Chart className="graph">
        <div id="chart"></div>
      </Chart>
    </Fragment>
  );
}
