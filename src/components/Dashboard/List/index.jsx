import React, { Fragment, useEffect } from "react";
import ListItem from "./ListItem/index";
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
    addSocketData,
    isThemeDark,
  } = props;

  useEffect(() => {
    if (Object.keys(currencyObject).length === 0) {
      initCurrencyObject();
    }
    if (isSocketOpen === false) {
      setSocketConnection(
        "",
        changeSocketStatus,
        updateCurrencyObject,
        addSocketData
      );
    }
  }, []);

  return (
    <List dark={isThemeDark}>
      <List.Head>
        <div>Pair</div>
        <div>Ask price</div>
        <div>Bid price</div>
      </List.Head>

      {CURRENCY_ARRAY.map((item) => {
        return (
          <ListItem
            dark={isThemeDark}
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
