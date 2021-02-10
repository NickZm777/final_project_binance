import React, { useState, useEffect } from "react";

import ListComponent from "./List/ListContainer";
import IntervalComponent from "./Interval/IntervalContainer";
import ChartComponent from "./Chart/ChartContainer";
import { Dashboard } from "./styled";

export function DashboardComponent(props) {
  const { isThemeDark } = props;
  return (
    <Dashboard dark={isThemeDark}>
      <Dashboard.TopInterval>
        <IntervalComponent />
      </Dashboard.TopInterval>
      <Dashboard.Top dark={isThemeDark}>
        <ListComponent />
        <ChartComponent />
      </Dashboard.Top>
      <Dashboard.Bottom></Dashboard.Bottom>
    </Dashboard>
  );
}
