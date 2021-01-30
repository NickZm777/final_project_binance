import React, { Fragment } from "react";
import { Chart } from "./styled";

export default function ChartComponent(props) {
  const { getTest, test } = props;

  const currency = ["usd", "eur", "cad", "abs"];

  return (
    <Fragment>
      {currency.map((item) => {
        return (
          <div onClick={() => getTest(item)} key={item}>
            {item}
          </div>
        );
      })}
      <Chart>Click</Chart>
    </Fragment>
  );
}
