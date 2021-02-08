import React, { Fragment, useEffect } from "react";
import { ListBlock } from "./styled";

export default function ListItem(props) {
  const {
    name,
    changeCurrency,
    currentCurrency,
    currencyObject,
    isThemeDark,
  } = props;

  return (
    <ListBlock
      dark={isThemeDark}
      onClick={() => changeCurrency(name)}
      className={currentCurrency === name ? "active" : ""}
    >
      <ListBlock.Body>{name}</ListBlock.Body>
      <ListBlock.Body>
        {currencyObject !== undefined &&
          currencyObject.ask &&
          parseFloat(currencyObject.ask).toFixed(3)}
      </ListBlock.Body>
      <ListBlock.Body>
        {currencyObject !== undefined &&
          currencyObject.ask &&
          parseFloat(currencyObject.bid).toFixed(3)}
      </ListBlock.Body>
    </ListBlock>
  );
}
