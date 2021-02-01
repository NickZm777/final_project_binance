import React, { useState, useEffect } from "react";
import { TradingBoard } from "./TradingBoard/index";
import ListComponent from "./List/ListContainer";
import IntervalComponent from "./Interval/IntervalContainer";
import ChartComponent from "./Chart/ChartContainer";
import { Dashboard } from "./styled";

export function DashboardComponent() {
  return (
    <Dashboard>
      <Dashboard.TopInterval>
        <IntervalComponent />
      </Dashboard.TopInterval>
      <Dashboard.Top>
        <ListComponent />
        <ChartComponent />
      </Dashboard.Top>
      <Dashboard.Bottom>
        <TradingBoard />
      </Dashboard.Bottom>
    </Dashboard>
  );
}
