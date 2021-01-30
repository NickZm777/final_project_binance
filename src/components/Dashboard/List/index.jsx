import React from "react";
import { List } from "./styled";

export default function ListComponent(props) {
  const { test } = props;
  return <List>{test}</List>;
}
