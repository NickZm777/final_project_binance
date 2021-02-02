import React, { Fragment, useEffect } from "react";
import { ListBlock } from "./styled";

export default function ListItem(props) {
  const { name, changeCurrency, currentCurrency, currencyObject } = props;
  console.log(currencyObject);
  return (
    <ListBlock
      onClick={() => changeCurrency(name)}
      className={currentCurrency === name ? "active" : ""}
    >
      <div>{name}</div>
      <div>{currencyObject.ask && currencyObject.ask}</div>
      <div>{currencyObject.bid && currencyObject.bid}</div>
    </ListBlock>
  );
}
