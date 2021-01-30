import React, { Fragment } from "react";
import { CURRENCY_ARRAY } from "./../../../constans/binance";
import { List } from "./styled";

export default function ListComponent(props) {
  const { changeCurrency, getHistoryChartData } = props;

  return (
    <List>
      {CURRENCY_ARRAY.map((item) => {
        return (
          <List.Item onClick={() => changeCurrency(item)} key={item}>
            {item}
          </List.Item>
        );
      })}
    </List>
  );
}
