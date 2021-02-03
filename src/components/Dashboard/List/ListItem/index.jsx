import React, { Fragment, useEffect } from "react";
import { ListBlock } from "./styled";

export default function ListItem(props) {
  const { name, changeCurrency, currentCurrency, currencyObject } = props;
  // console.log(props);
  return (
    <ListBlock
      onClick={() => changeCurrency(name)}
      className={currentCurrency === name ? "active" : ""}
    >
      <div>{name}</div>
      <div>
        {currencyObject !== undefined &&
          currencyObject.ask &&
          currencyObject.ask}
      </div>
      <div>
        {currencyObject !== undefined &&
          currencyObject.ask &&
          currencyObject.bid}
      </div>
    </ListBlock>
  );
}
