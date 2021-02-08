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
      <List.IntChanger isDarkTheme={isThemeDark}>
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

      <List.GrChanger isDarkTheme={isThemeDark}>
        <List.Button
          isDarkTheme={isThemeDark}
          onClick={() => setChartType(false)}
          className={isChartLine ? "active" : ""}
        >
          Candle
        </List.Button>
        <List.Button
          isDarkTheme={isThemeDark}
          onClick={() => setChartType(true)}
          className={!isChartLine ? "active" : ""}
        >
          Line
        </List.Button>
      </List.GrChanger>
      <List.Theme
        onClick={
          isThemeDark ? () => setThemeType(false) : () => setThemeType(true)
        }
        className={isThemeDark ? "passive" : "active"}
        isDarkTheme={isThemeDark}
      >
        {isThemeDark ? (
          <div className="dark">Dark</div>
        ) : (
          <div className="light">Light</div>
        )}
      </List.Theme>
    </List>
  );
}
