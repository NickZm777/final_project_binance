import React from "react";
import { Footer } from "./styled";
import Maestro from "../../media/footer/maestro.png";
import Mcard from "../../media/footer/mcard.png";
import Visa from "../../media/footer/visa.png";
import Wire from "../../media/footer/wire.png";

export function FooterComponent() {
  return (
    <Footer>
      <Footer.Top>
        <Footer.Links>
          <h3>Quick Links</h3>
          <Footer.Box>
            <a href="#">Contact us</a>

            <a href="#">Trading Platforms</a>

            <a href="#">About us</a>
          </Footer.Box>
        </Footer.Links>
        <Footer.Credits>
          <h3>Payment Methods</h3>
          <Footer.Box>
            <img src={Maestro}></img>

            <img src={Mcard}></img>

            <img src={Visa}></img>

            <img src={Wire}></img>
          </Footer.Box>
        </Footer.Credits>
      </Footer.Top>
      <Footer.Bottom>
        <Footer.Legal>
          <h4>Legal</h4>
          <p>
            <a href="#">Terms and Conditions</a>
            <a href="#">Risk Disclosure Privacy policy</a>
            <a href="#">AML Policy</a>
            <a href="#">Acceptable Use Policy </a>{" "}
            <a href="#">Deposit Policy</a>
            <a href="#">Refund Policy</a>
          </p>
        </Footer.Legal>
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
