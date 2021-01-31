import React, { Fragment } from "react";
import { INTERVAL_ARRAY } from "./../../../constans/binance";
import { List } from "./styled";

export default function IntervalComponent(props) {
  const { changeInterval, getHistoryChartData } = props;

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
        <List.Button>Candles</List.Button>
        <List.Button>Line</List.Button>
      </div>
    </List>
  );
}
