import React, { useState, useEffect } from "react";
import "./nav.scss";
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { Offcanvas, Accordion } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import dummy from "./../../static/dummy.webp";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  const handleNavClose = () => setNavShow(false);
  const handleNavShow = () => setNavShow(true);
  const handleCartClose = () => setCartShow(false);
  const handleCartShow = () => setCartShow(true);
  return (
    <>
      <div className="containerNav">
        <Marquee gradient={false} speed={150} className="disclaimerMarquee">
          <p>PORTFOLIO WEBSITE, NOT A REAL WEBSITE!! WIP</p>
        </Marquee>
        <nav className={scroll ? "navigation" : "navigation alt"}>
          <div className="left">
            <p className="title">
              <Link to="/" className="text-reset">
                TECKWEAR
              </Link>
            </p>
          </div>
          <div className="middle">
            <ul className="navList">
              <li className="listItem">
                Men
                <div className="subMenu">
                  <div className="inner">
                    <ul className="subMenuList">
                      <Link to="/products/men" className="text-reset">
                        <li className="subMenuListItem">
                          <p className="listTitle">All</p>
                          <p className="amount">128</p>
                        </li>
                      </Link>
                      <li className="subMenuListItem">
                        <p className="listTitle">Sale</p>
                        <p className="amount">28</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">New</p>
                        <p className="amount">33</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Tops</p>
                        <p className="amount">45</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Bottoms</p>
                        <p className="amount">93</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Footwear</p>
                        <p className="amount">23</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Outerwear</p>
                        <p className="amount">13</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="listItem">
                Women
                <div className="subMenu">
                  <div className="inner">
                    <ul className="subMenuList">
                      <li className="subMenuListItem">
                        <p className="listTitle">All</p>
                        <p className="amount">128</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Sale</p>
                        <p className="amount">28</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">New</p>
                        <p className="amount">33</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Tops</p>
                        <p className="amount">45</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Bottoms</p>
                        <p className="amount">93</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Footwear</p>
                        <p className="amount">23</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Outerwear</p>
                        <p className="amount">43</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="listItem">
                Unisex
                <div className="subMenu">
                  <div className="inner">
                    <ul className="subMenuList">
                      <li className="subMenuListItem">
                        <p className="listTitle">All</p>
                        <p className="amount">128</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Sale</p>
                        <p className="amount">28</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">New</p>
                        <p className="amount">33</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Tops</p>
                        <p className="amount">45</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Bottoms</p>
                        <p className="amount">93</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Footwear</p>
                        <p className="amount">23</p>
                      </li>
                      <li className="subMenuListItem">
                        <p className="listTitle">Outerwear</p>
                        <p className="amount">53</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="listItem">Accessories</li>
              <li className="listItem">About</li>
            </ul>
          </div>
          <div className="right">
            <ul className="navList">
              <li className="listItem">
                <FiSearch className="icon" />
              </li>
              <li className="listItem cartIcon">
                <FiShoppingCart className="icon" onClick={handleCartShow} />
                <span className="totalItems">2</span>
              </li>
              <li className="listItem">
                <Link to="/signin" className="text-reset">
                  <FiUser className="icon" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="right-md">
            <div className="cartIcon me-5">
              <FiShoppingCart className="icon " onClick={handleCartShow} />
              <span className="totalItems">2</span>
            </div>
            <FiMenu className="icon" onClick={handleNavShow} />
          </div>
        </nav>
      </div>

      <Offcanvas show={navShow} onHide={handleNavClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="topBarContainer">
              <FiSearch className="icon me-3" />
              <span className="title">TECKWEAR</span>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion alwaysOpen flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>MEN</Accordion.Header>
              <Accordion.Body>
                <ul className="accordionList">
                  <Link
                    to="/products/men"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">All</span>
                      <span className="amount">122</span>
                    </li>
                  </Link>
                  <li className="accordionListItem">
                    <span className="listTitle">Sale</span>
                    <span className="amount">22</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">New</span>
                    <span className="amount">22</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Tops</span>
                    <span className="amount">40</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Bottoms</span>
                    <span className="amount">32</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Footwear</span>
                    <span className="amount">52</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Outerwear</span>
                    <span className="amount">22</span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>WOMEN</Accordion.Header>
              <Accordion.Body>
                <ul className="accordionList">
                  <li className="accordionListItem">
                    <span className="listTitle">All</span>
                    <span className="amount">122</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Sale</span>
                    <span className="amount">22</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">New</span>
                    <span className="amount">22</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Tops</span>
                    <span className="amount">40</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Bottoms</span>
                    <span className="amount">32</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Footwear</span>
                    <span className="amount">52</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Outerwear</span>
                    <span className="amount">22</span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>UNISEX</Accordion.Header>
              <Accordion.Body>
                <ul className="accordionList">
                  <li className="accordionListItem">
                    <span className="listTitle">All</span>
                    <span className="amount">122</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Sale</span>
                    <span className="amount">22</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">New</span>
                    <span className="amount">22</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Tops</span>
                    <span className="amount">40</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Bottoms</span>
                    <span className="amount">32</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Footwear</span>
                    <span className="amount">52</span>
                  </li>
                  <li className="accordionListItem">
                    <span className="listTitle">Outerwear</span>
                    <span className="amount">22</span>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <ul className="offcanvasList">
            <li className="offCanvasItem">ACCESSORIES</li>
            <li className="offCanvasItem">SIGN IN</li>
            <li className="offCanvasItem">ABOUT</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={cartShow} onHide={handleCartClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="topBarContainer">
              <span className="title">SHOPPING CART</span>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="shoppingCartOffCanvas">
            <div className="top" id="top">
              <CartItem img={dummy} name="Teckwear Hoodie" />
              <CartItem img={dummy} name="Teckwear Hoodie" />
            </div>

            <div className="bottom" id="bottom">
              <div className="top">
                <p className="info">
                  Discount Codes are calculated at checkout
                </p>
              </div>
              <div className="totalPriceContainer">
                <div className="priceContainer">
                  <span className="priceTitle">Total:</span>
                  <span className="price">$100.00</span>
                </div>
                <div className="priceContainer">
                  <span className="priceTitle">Shipping:</span>
                  <span className="price">FREE SHIPPING</span>
                </div>

                <button className="cta">CONTINUE TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav;
