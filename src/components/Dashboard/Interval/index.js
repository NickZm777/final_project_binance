import React, { Fragment } from "react";
import { INTERVAL_ARRAY } from "./../../../constans/binance";
import { List } from "./styled";

export default function IntervalComponent(props) {
  const {
    changeInterval,
    setChartType,
    isChartLine,
    currentInterval,
    setThemeType,
    isThemeDark,
  } = props;

  return (
    <List>
      <List.IntChanger>
        {INTERVAL_ARRAY.map((item) => {
          return (
            <List.Item
              onClick={() => changeInterval(item)}
              isDarkTheme={isThemeDark}
              key={item}
              className={currentInterval === item ? "active" : ""}
            >
              {item}
            </List.Item>
          );
        })}
      </List.IntChanger>

      <List.GrChanger>
        <List.Button
          onClick={() => setChartType(false)}
          className={isChartLine ? "active" : ""}
        >
          Candle
        </List.Button>
        <List.Button
          onClick={() => setChartType(true)}
          className={!isChartLine ? "active" : ""}
        >
          Line
        </List.Button>
      </List.GrChanger>
      <List.Theme
        onClick={() => setThemeType(true)}
        className={isThemeDark ? "passive" : "active"}
      >
        Light
      </List.Theme>
      <List.Theme
        onClick={() => setThemeType(false)}
        className={!isThemeDark ? "passive" : "active"}
      >
        Dark
      </List.Theme>
    </List>
  );
}
