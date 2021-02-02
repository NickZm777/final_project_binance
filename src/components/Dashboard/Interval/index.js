import React, { Fragment } from "react";
import { INTERVAL_ARRAY } from "./../../../constans/binance";
import { List } from "./styled";
import Candle from "./image/4.png";
import Line from "./image/5.png";

export default function IntervalComponent(props) {
  const { changeInterval, setChartType, isChartLine, currentInterval } = props;

  return (
    <List>
      {INTERVAL_ARRAY.map((item) => {
        return (
          <List.Item
            onClick={() => changeInterval(item)}
            key={item}
            className={currentInterval === item ? "active" : ""}
          >
            {item}
          </List.Item>
        );
      })}
      <List.Changer>
        <List.Button
          onClick={() => setChartType(false)}
          className={isChartLine ? "" : "active"}
        >
          <img src={Candle}></img>
        </List.Button>
        <List.Button
          onClick={() => setChartType(true)}
          className={!isChartLine ? "" : "active"}
        >
          <img src={Line}></img>
        </List.Button>
      </List.Changer>
    </List>
  );
}
