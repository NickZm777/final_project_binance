import React, { Fragment, useEffect } from "react";
import ListItem from "./ListItem/index.jsx";
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
    initCurrencyObject,
    currencyObject,
    isSocketOpen,
    updateCurrencyObject,
  } = props;

  useEffect(() => {
    if (Object.keys(currencyObject).length === 0) {
      initCurrencyObject();
    }
    if (isSocketOpen === false) {
      setSocketConnection("", changeSocketStatus, updateCurrencyObject);
    }
  }, []);

  return (
    <List>
      {CURRENCY_ARRAY.map((item) => {
        return (
          <ListItem
            changeCurrency={changeCurrency}
            currentCurrency={currentCurrency}
            currencyObject={currencyObject[item]}
            key={item}
            name={item}
          ></ListItem>
        );
      })}
    </List>
  );
}
