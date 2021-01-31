import React, { Fragment } from "react";
import { INTERVAL_ARRAY } from "./../../../constans/binance";
import { List } from "./styled";

export default function IntervalComponent(props) {
  const { changeInterval, setChartType, isChartLine } = props;

  return (
    <List>
      {INTERVAL_ARRAY.map((item) => {
        return (
          <List.Item onClick={() => changeInterval(item)} key={item}>
            {item}
          </List.Item>
        );
      })}
      <div>
        <List.Button
          onClick={() => setChartType(false)}
          className={isChartLine ? "" : "active"}
        >
          {" "}
          Candles{" "}
        </List.Button>
        <List.Button
          onClick={() => setChartType(true)}
          className={!isChartLine ? "" : "active"}
        >
          Line
        </List.Button>
      </div>
    </List>
  );
}
