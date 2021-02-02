import React from "react";
import { Footer } from "./styled";

export function FooterComponent() {
  return (
    <Footer>
      <Footer.Top>
        <Footer.Links>
          <h3>Quick Links</h3>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Footer.Links>
        <Footer.Credits>
          <h3>Paqyment Methods</h3>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Footer.Credits>
      </Footer.Top>
      <Footer.Bottom>
        <p>
          Legal Terms and Conditions Risk Disclosure Privacy Policy KYCEL Policy
          AML Policy Acceptable Use Policy Deposit Policy Refund Policy
        </p>
        <p>
          CFDJSX are complex instruments and come with a risk of losing and
          gaining money rapidly due to leverage. 72% of retail investor accounts
          lose money when trading CFDs. You should consider whether you
          understand how CFDs work, and whether you can afford to take the risk
          of losing or gaining money.
        </p>
        <p>
          Risk Warning: Foreign Exchange is highly speculative and carries a
          level of risk that may not be suitable for all investors. You may lose
          some or all of your invested capital; therefore, you should not
          speculate with the capital you cannot afford to lose. You should be
          aware of all the risks associated with trading Foreign Exchange.
          Please ensure you read our Terms and Conditions and Risk Disclosure
          Statement before making any operation on our trading platform. We
          reserve our rights to cancel all or a single client deal in case of
          front-running or any other suspicious activity without a preliminary
          notification.
        </p>
        <p>© All Rights Reserved. GLOBAL Stox 2021.</p>
      </Footer.Bottom>
    </Footer>
  );
}
