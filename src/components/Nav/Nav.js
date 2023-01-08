import React, { useState, useEffect } from "react";
import "./nav.scss";
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { Offcanvas, Accordion } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import UseAuth from "../../hooks/UseAuth";
import { loadStripe } from "@stripe/stripe-js";
import { useSendLogOutMutation } from "../../app/slice/authApiSlice";
import { useSelector } from "react-redux";
import { selectAllCartProducts } from "../../app/slice/cartSlice";
import { selectAllProducts } from "../../app/slice/productsApiSlice";
import { useGetUserQuery } from "../../app/slice/usersApiSlice";

const stripePromise = loadStripe(
  "pk_test_51LP51LSFncM9QBps7YO3UAX9t4rivrycZ8aGcb5CBQTRQoOHu8tzE1lJgPn2ThT7QZ3BXPTYhbsG1UqCeoHD6DP400hD1Nim7M"
);

const Nav = () => {
  const { username, userId } = UseAuth();
  const [navShow, setNavShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const { data: userQuery } = useGetUserQuery(userId);

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
  const navigate = useNavigate();
  const [sendLogOut, { isLoading, isSuccess, isError, error }] =
    useSendLogOutMutation();
  const cartProducts = useSelector(selectAllCartProducts);
  const products = useSelector(selectAllProducts);
  const men = products?.filter((product) => product.BIgender === "men");
  const women = products?.filter((product) => product.BIgender === "women");
  const totalPrice = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.qty * product.price;
    });
    return total.toFixed(2);
  };

  async function makePayment() {
    const stripe = await stripePromise;
    const reqBody = {
      user: userId,
      email: userQuery.email,
      product: cartProducts.map((product) => ({
        id: product.id,
        qty: product.qty,
      })),
    };

    const response = await fetch("https://teckwear-api.onrender.com/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    totalPrice();
    //eslint-disable-next-line
  }, [cartProducts]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.data?.message}</p>;
  return (
    <>
      <div className="containerNav">
        <Marquee gradient={false} speed={150} className="disclaimerMarquee">
          <p>
            PORTFOLIO WEBSITE WIP, Disable AdBlock if page is stuck on loading.
          </p>
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
                          <p className="amount">{men?.length}</p>
                        </li>
                      </Link>
                      <Link to="/products/men?tops=true" className="text-reset">
                        <li className="subMenuListItem">
                          <p className="listTitle">Tops</p>
                          <p className="amount">
                            {
                              men?.filter(
                                (product) => product.BIcategory === "tops"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                      <Link
                        to="/products/men?bottoms=true"
                        className="text-reset"
                      >
                        <li className="subMenuListItem">
                          <p className="listTitle">Bottoms</p>
                          <p className="amount">
                            {
                              men?.filter(
                                (product) => product.BIcategory === "bottoms"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                      <Link
                        to="/products/men?footwear=true"
                        className="text-reset"
                      >
                        <li className="subMenuListItem">
                          <p className="listTitle">Footwear</p>
                          <p className="amount">
                            {
                              men?.filter(
                                (product) => product.BIcategory === "footwear"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                      <Link
                        to="/products/men?outerwear=true"
                        className="text-reset"
                      >
                        <li className="subMenuListItem">
                          <p className="listTitle">Outerwear</p>
                          <p className="amount">
                            {
                              men?.filter(
                                (product) => product.BIcategory === "outerwear"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="listItem">
                Women
                <div className="subMenu">
                  <div className="inner">
                    <ul className="subMenuList">
                      <Link to="/products/women" className="text-reset">
                        <li className="subMenuListItem">
                          <p className="listTitle">All</p>
                          <p className="amount">{women?.length}</p>
                        </li>
                      </Link>
                      <Link
                        to="/products/women?tops=true"
                        className="text-reset"
                      >
                        <li className="subMenuListItem">
                          <p className="listTitle">Tops</p>
                          <p className="amount">
                            {
                              women?.filter(
                                (product) => product.BIcategory === "tops"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                      <Link
                        to="/products/women?bottoms=true"
                        className="text-reset"
                      >
                        <li className="subMenuListItem">
                          <p className="listTitle">Bottoms</p>
                          <p className="amount">
                            {
                              women?.filter(
                                (product) => product.BIcategory === "bottoms"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                      <Link
                        to="/products/women?footwear=true"
                        className="text-reset"
                      >
                        <li className="subMenuListItem">
                          <p className="listTitle">Footwear</p>
                          <p className="amount">
                            {
                              women?.filter(
                                (product) => product.BIcategory === "footwear"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                      <Link
                        to="/products/women?outerwear=true"
                        className="text-reset"
                      >
                        <li className="subMenuListItem">
                          <p className="listTitle">Outerwear</p>
                          <p className="amount">
                            {
                              women?.filter(
                                (product) => product.BIcategory === "outerwear"
                              ).length
                            }
                          </p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
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
                <span
                  className={`totalItems ${
                    cartProducts.length === 0 && "d-none"
                  }`}
                >
                  {cartProducts.length}
                </span>
              </li>
              <li className="listItem">
                {username ? (
                  <>
                    <FiUser className="icon" />
                    <div className="subMenu">
                      <div className="inner">
                        <ul className="subMenuList">
                          <li className="subMenuListItem">
                            <p className="listTitle">{username}</p>
                          </li>
                          <Link to="/orders" className="text-reset">
                            <li className="subMenuListItem">
                              <p className="listTitle">Orders</p>
                            </li>
                          </Link>
                          <li
                            className="subMenuListItem"
                            onClick={() => sendLogOut()}
                          >
                            <p className="listTitle">Logout</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to="/signin" className="text-reset">
                    <FiUser className="icon" />
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="right-md">
            <div className="cartIcon me-5">
              <FiShoppingCart className="icon " onClick={handleCartShow} />
              <span
                className={`totalItems ${
                  cartProducts.length === 0 && "d-none"
                }`}
              >
                {cartProducts.length}
              </span>
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
                      <span className="amount">{men?.length}</span>
                    </li>
                  </Link>

                  <Link
                    to="/products/men?tops=true"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">Tops</span>
                      <span className="amount">
                        {
                          men?.filter(
                            (product) => product.BIcategory === "tops"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                  <Link
                    to="/products/men?bottoms=true"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">Bottoms</span>
                      <span className="amount">
                        {
                          men?.filter(
                            (product) => product.BIcategory === "bottoms"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                  <Link to="/products/men?footwear=true" className="text-reset">
                    <li className="accordionListItem">
                      <span className="listTitle">Footwear</span>
                      <span className="amount">
                        {
                          men?.filter(
                            (product) => product.BIcategory === "footwear"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                  <Link
                    to="/products/men?outerwear=true"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">Outerwear</span>
                      <span className="amount">
                        {
                          men?.filter(
                            (product) => product.BIcategory === "outerwear"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>WOMEN</Accordion.Header>
              <Accordion.Body>
                <ul className="accordionList">
                  <Link
                    to="/products/women"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">All</span>
                      <span className="amount">{women?.length}</span>
                    </li>
                  </Link>

                  <Link
                    to="/products/women?tops=true"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">Tops</span>
                      <span className="amount">
                        {
                          women?.filter(
                            (product) => product.BIcategory === "tops"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                  <Link
                    to="/products/women?bottoms=true"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">Bottoms</span>
                      <span className="amount">
                        {
                          women?.filter(
                            (product) => product.BIcategory === "bottoms"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                  <Link
                    to="/products/women?footwear=true"
                    className="text-reset"
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">Footwear</span>
                      <span className="amount">
                        {
                          women?.filter(
                            (product) => product.BIcategory === "footwear"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                  <Link
                    to="/products/women?outerwear=true"
                    className="text-reset"
                    onClick={handleNavClose}
                  >
                    <li className="accordionListItem">
                      <span className="listTitle">Outerwear</span>
                      <span className="amount">
                        {
                          women?.filter(
                            (product) => product.BIcategory === "outerwear"
                          ).length
                        }
                      </span>
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {username ? (
            <Accordion alwaysOpen flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>SIGN IN</Accordion.Header>
                <Accordion.Body>
                  <ul className="accordionList">
                    <Link
                      to="/profile"
                      className="text-reset"
                      onClick={handleNavClose}
                    >
                      <li className="accordionListItem">
                        <span className="listTitle">PROFILE</span>
                      </li>
                    </Link>
                    <li className="accordionListItem">
                      <span className="listTitle">Orders</span>
                    </li>
                    <li
                      className="accordionListItem"
                      onClick={() => sendLogOut()}
                    >
                      <span className="listTitle">Logout</span>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <ul className="offcanvasList">
              <Link
                to="/signin"
                className="text-reset"
                onClick={handleNavClose}
              >
                <li className="offCanvasItem">SIGN IN</li>
              </Link>
            </ul>
          )}
          <ul className="offcanvasList">
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
              {cartProducts?.length === 0 ? (
                <p>No Items in your Cart</p>
              ) : (
                cartProducts.map((product) => (
                  <CartItem
                    id={product.id}
                    quantity={product.qty}
                    color={product.color}
                    size={product.size}
                    key={product.id}
                  />
                ))
              )}
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
                  <span className="price">₹{totalPrice()}</span>
                </div>
                <div className="priceContainer">
                  <span className="priceTitle">Shipping:</span>
                  <span className="price">FREE SHIPPING</span>
                </div>

                <button
                  className="cta"
                  disabled={!cartProducts?.length}
                  onClick={() => {
                    makePayment();
                  }}
                >
                  CONTINUE TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav;
