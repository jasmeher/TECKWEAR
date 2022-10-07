import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="top">
          <h2 className="text">FREE SHIPPING</h2>
          <h2 className="text">SECURE PAYMENT</h2>
          <h2 className="text">EASY RETURNS</h2>
          <h2 className="text">24/7 SUPPORT</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="top">
              <h2 className="heading">HELP</h2>
              <ul className="footerList">
                <li className="footerItem">FAQ</li>
                <li className="footerItem">Terms</li>
                <li className="footerItem">Contact</li>
                <li className="footerItem">Shipping</li>
                <li className="footerItem">Returns</li>
              </ul>
            </div>
            <div className="top">
              <h2 className="heading">FOLLOW US</h2>
              <ul className="footerList">
                <li className="footerItem">facebook</li>
                <li className="footerItem">twitter</li>
                <li className="footerItem">instagram</li>
                <li className="footerItem">pinterest</li>
                <li className="footerItem">tumblr</li>
              </ul>
            </div>
          </div>
          <div className="middle">
            <div className="top">
              <h2 className="heading">SHIPPING</h2>

              <p className="text">FREE STANDARD SHIPPING</p>

              <p className="text">
                Delivery times are approximately 7-21 working days
              </p>

              <p className="text">
                For additional information, please consult the Shipping Policy
              </p>
            </div>
          </div>
          <div className="middle">
            <div className="top">
              <h2 className="heading">REQUEST</h2>

              <p className="text">
                You can request a return within 14 days of the delivery date
              </p>

              <p className="text">
                Please use our Contact form and select "Returns / Exchanges" To
                start the process
              </p>
              <p className="text">
                For additional information, please consult the Return Policy
              </p>
            </div>
          </div>
        </div>
        <div className="logo">
          <p className="title">TECKWEAR</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
