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
    isThemeDark,
  } = props;

  let chart;

  function initGraph() {
    chart = createChart(document.getElementById("chart"), {
      width: 1300,
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
      localization: {
        priceFormatter: function (price) {
          return "$" + price;
        },
      },
      layout: {
        backgroundColor: isThemeDark === false ? "#1e1e1fb5" : "white",
        textColor: "#696969",
        fontSize: 12,
        fontFamily: "Calibri",
      },
      grid: {
        vertLines: {
          color: isThemeDark === false ? "#262525" : "#939292a3",
          style: 1,
          visible: true,
        },
        horzLines: {
          color: isThemeDark === false ? "#262525" : "#939292a3",
          style: 1,
          visible: true,
        },
      },
    });

    if (isChartLine === false) {
      const candlestickSeries = chart.addCandlestickSeries();
      candlestickSeries.setData(historyData);
      graphRenderFunction(true);
      setCandlestickSeries(candlestickSeries);
    } else {
      const candlestickSeries = chart.addAreaSeries();
      candlestickSeries.setData(historyDataLine);
      graphRenderFunction(true);
      setCandlestickSeries(candlestickSeries);
    }
  }

  // function initLine() {
  //   chart = createChart(document.getElementById("chart"));
  //   const areaSeries = chart.addAreaSeries();
  //   areaSeries.setData(historyDataLine);
  //   graphRenderFunction(true);
  //   setCandlestickSeries(areaSeries);
  // }

  const [isGraphrender, graphRenderFunction] = useState(false);
  const [mycandlestickSeries, setCandlestickSeries] = useState([]);

  useEffect(() => {
    if (
      !isGraphrender &&
      historyData.length !== 0 &&
      historyDataLine.length !== 0
    ) {
      initGraph();
    }
  }, [historyData, historyDataLine, isGraphrender]);

  // useEffect(() => {
  //   if (
  //     !isGraphrender &&
  //     historyDataLine.length !== 0 &&
  //     isChartLine === true
  //   ) {
  //     initLine();
  //   }
  // }, [historyDataLine, isGraphrender]);

  useEffect(() => {
    if (
      historyData.length !== 0 &&
      mycandlestickSeries.length !== 0 &&
      isChartLine === false
    ) {
      mycandlestickSeries.setData(historyData);
    } else if (
      historyDataLine.length !== 0 &&
      mycandlestickSeries.length !== 0 &&
      isChartLine === true
    ) {
      mycandlestickSeries.setData(historyDataLine);
    }
  }, [historyData, historyDataLine, isChartLine]);

  // useEffect(() => {
  //   if (
  //     historyDataLine.length !== 0 &&
  //     mycandlestickSeries.length !== 0 &&
  //     isChartLine === true
  //   ) {
  //     mycandlestickSeries.setData(historyDataLine);
  //   }
  // }, [historyDataLine]);

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
