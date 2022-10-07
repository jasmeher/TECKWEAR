import React, { useState, useEffect } from "react";
import "./nav.scss";
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { Offcanvas, Accordion } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Nav = () => {
  const [show, setShow] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="containerNav">
        <Marquee gradient={false} speed={150} className="disclaimerMarquee">
          <p>PORTFOLIO WEBSITE, NOT A REAL WEBSITE</p>
        </Marquee>
        <nav className={scroll ? "navigation" : "navigation alt"}>
          <div className="left">
            <p className="title">TECKWEAR</p>
          </div>
          <div className="middle">
            <ul className="navList">
              <li className="listItem">
                Men
                <div className="subMenu">
                  <div className="inner">HELLO</div>
                </div>
              </li>
              <li className="listItem">Women</li>
              <li className="listItem">Unisex</li>
              <li className="listItem">Accessories</li>
              <li className="listItem">About</li>
            </ul>
          </div>
          <div className="right">
            <ul className="navList">
              <li className="listItem">
                <FiSearch className="icon" />
              </li>
              <li className="listItem">
                <FiShoppingCart className="icon" />
              </li>
              <li className="listItem">
                <FiUser className="icon" />
              </li>
            </ul>
          </div>
          <div className="right-md">
            <FiMenu className="icon" onClick={handleShow} />
          </div>
        </nav>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
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
                  <li className="accordionListItem">Pants</li>
                  <li className="accordionListItem">Jackets</li>
                  <li className="accordionListItem">Shoes</li>
                  <li className="accordionListItem">Hoodies</li>
                  <li className="accordionListItem">Vests</li>
                  <li className="accordionListItem">Shirts</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>WOMEN</Accordion.Header>
              <Accordion.Body>
                <ul className="accordionList">
                  <li className="accordionListItem">Pants</li>
                  <li className="accordionListItem">Jackets</li>
                  <li className="accordionListItem">Shoes</li>
                  <li className="accordionListItem">Hoodies</li>
                  <li className="accordionListItem">Vests</li>
                  <li className="accordionListItem">Shirts</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>UNISEX</Accordion.Header>
              <Accordion.Body>
                <ul className="accordionList">
                  <li className="accordionListItem">Pants</li>
                  <li className="accordionListItem">Jackets</li>
                  <li className="accordionListItem">Shoes</li>
                  <li className="accordionListItem">Hoodies</li>
                  <li className="accordionListItem">Vests</li>
                  <li className="accordionListItem">Shirts</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <ul className="offcanvasList">
            <li className="offCanvasItem">ACCESSORIES</li>
            <li className="offCanvasItem">CART</li>
            <li className="offCanvasItem">SIGN IN</li>
            <li className="offCanvasItem">ABOUT</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav;
