import React, { Fragment } from "react";
import { INTERVAL_ARRAY } from "./../../../constans/binance";
import { List } from "./styled";

export default function IntervalComponent(props) {
  const { changeInterval, setChartType, isChartLine, currentInterval } = props;

  return (
    <List>
      <List.IntChanger>
        {INTERVAL_ARRAY.map((item) => {
          return (
            <List.Item
              onClick={() => changeInterval(item)}
              isDarkTheme={isChartLine}
              key={item}
              className={currentInterval === item ? "active" : ""}
            >
              {item}
            </List.Item>
          );
        })}
      </List.IntChanger>
      <List.GrChanger>
        <List.Button
          onClick={() => setChartType(false)}
          className={isChartLine ? "" : "active"}
        >
          Line
        </List.Button>
        <List.Button
          onClick={() => setChartType(true)}
          className={!isChartLine ? "" : "active"}
        >
          Candle
        </List.Button>
      </List.GrChanger>
    </List>
  );
}
