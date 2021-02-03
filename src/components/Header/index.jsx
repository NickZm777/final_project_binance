import React, { useState, useEffect } from "react";
import { Head } from "./styled";
import Logo from "../../media/header/logo_dark.png";

export function HeaderComponent() {
  return (
    <Head>
      <Head.Logo>
        <img src={Logo}></img>
      </Head.Logo>
      <Head.H1>Binance stock market</Head.H1>
    </Head>
  );
}
