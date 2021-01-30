import React, { useState, useEffect } from "react";
import { TradingBoard } from "./TradingBoard/index";
import ListComponent from "./List/ListContainer";
import ChartComponent from "./Chart/ChartContainer";

export function DashboardComponent() {
  return (
    <div>
      <ListComponent />
      <ChartComponent />
      <TradingBoard />
    </div>
  );
}
