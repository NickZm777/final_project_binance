import React, { Fragment, useEffect } from "react";
import { CURRENCY_ARRAY } from "./../../../constans/binance";
import {
  disconnectSocketConnection,
  setSocketConnection,
} from "./../../../service/socket";
import { List } from "./styled";

export default function ListComponent(props) {
  const {
    changeCurrency,
    initSocketConnection,
    currentCurrency,
    changeSocketStatus,
  } = props;

  useEffect(() => {
    setSocketConnection(currentCurrency, changeSocketStatus);
  }, [currentCurrency]);

  return (
    <List>
      {CURRENCY_ARRAY.map((item) => {
        return (
          <List.Item
            onClick={() => changeCurrency(item)}
            key={item}
            className={currentCurrency === item ? "active" : ""}
          >
            {item}
          </List.Item>
        );
      })}
    </List>
  );
}
