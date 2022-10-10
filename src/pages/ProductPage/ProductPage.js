import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import "./productpage.scss";
import dummy from "./../../static/dummy.webp";
import dummy2 from "./../../static/dummy2.webp";
import ProductCarousel from "./../../components/ProductCarousel/ProductCarousel";
import Item from "./../../components/Item/Item";
import ReviewBox from "./../../components/ReviewBox/ReviewBox";
import pfp from "./../../static/pfp.webp";
import { AiFillStar } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import AnimatedRoute from "../../components/AnimatedPage/AnimatedPage";

const ProductPage = () => {
  const slides = [
    { url: dummy, title: "dummy1" },
    { url: dummy2, title: "dummy2" },
  ];

  const [qty, setQty] = useState(1);

  const decQty = (e) => {
    e.preventDefault();
    if (qty === 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const incQty = (e) => {
    e.preventDefault();
    if (qty === 5) {
      setQty(5);
    } else {
      setQty(qty + 1);
    }
  };

  useEffect(() => {
    const left = document.getElementById("left-arrow");
    const right = document.getElementById("right-arrow");

    if (qty === 1) {
      left.classList.add("disabled");
    }

    if (qty === 5) {
      right.classList.add("disabled");
    }

    if (qty > 1 && qty < 5) {
      left.classList.remove("disabled");
      right.classList.remove("disabled");
    }
  }, [qty]);
  return (
    <>
      <AnimatedRoute>
        <div className="productPageContainer">
          <div className="top">
            <p className="links">
              <span className="history">Men/All/</span>
              <span className="productName">Teckwear Hoodie</span>
            </p>
          </div>

          <div className="middle">
            <div className="left">
              <ProductCarousel slides={slides} />
            </div>

            <div className="right">
              <div className="top">
                <p className="productName">Teckwear Hoodie</p>
                <ul className="ratingUL">
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <li className="ratingList">
                        <AiFillStar />
                      </li>
                    ))}
                </ul>
                <p className="productPrice">$50.00</p>

                <div className="detailsContainer">
                  <p className="detailName">Size:</p>
                  <ul className="detailList">
                    <li className="detailItem">
                      <input type="radio" value="S" name="size" id="radio1" />
                      <label htmlFor="radio1" className="radioLabel">
                        S
                      </label>
                    </li>
                    <li className="detailItem">
                      <input type="radio" value="M" name="size" id="radio2" />
                      <label htmlFor="radio2">M</label>
                    </li>
                    <li className="detailItem">
                      <input type="radio" value="L" name="size" id="radio3" />
                      <label htmlFor="radio3">L</label>
                    </li>
                    <li className="detailItem">
                      <input type="radio" value="XL" name="size" id="radio4" />
                      <label htmlFor="radio4">XL</label>
                    </li>
                  </ul>
                </div>
                <div className="detailsContainer">
                  <p className="detailName">Color:</p>
                  <ul className="detailList">
                    <li className="detailItem">
                      <input
                        type="radio"
                        value="White"
                        name="color"
                        id="radio5"
                      />
                      <label htmlFor="radio5">White</label>
                    </li>
                    <li className="detailItem">
                      <input
                        type="radio"
                        value="Black"
                        name="color"
                        id="radio6"
                      />
                      <label htmlFor="radio6">Black</label>
                    </li>
                  </ul>
                </div>
                <div className="detailsContainer">
                  <p className="detailName">Quantity:</p>
                  <div className="quantityContainer">
                    <div className="arrow" onClick={decQty} id="left-arrow">
                      <FiArrowLeft />
                    </div>
                    <p className="quantity">{qty}</p>
                    <div className="arrow" onClick={incQty} id="right-arrow">
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
                <button className="cta w-50 productCTA">ADD TO CART</button>
              </div>

              <div className="bottom">
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  flush
                  className="accordionDetails"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>DETAILS</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Facilis modi alias vel ut laudantium eius dolorum
                        quia magnam, laboriosam iure ad quis recusandae
                        voluptate cum eum saepe, quas suscipit perspiciatis
                        animi earum? Nemo, nesciunt eveniet. Incidunt, eveniet
                        tempore ad fugiat possimus mollitia nobis, commodi,
                        voluptate a similique aliquid distinctio laborum?
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>MATERIALS</Accordion.Header>
                    <Accordion.Body>
                      <p>Polyester, cotton and spandex. Comfy and durable.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="top">
              <p className="heading">OTHER PRODUCTS</p>
              <button className="cta ctaRedirect">BROWSE</button>
            </div>

            <div className="otherProducts">
              <div className="primaryContainer">
                <Link to="/product/222" className="text-reset">
                  <Item
                    img={dummy}
                    productName="Teckwear Hoodie"
                    price={50}
                    discount={50}
                  />
                </Link>
              </div>
              <div className="primaryContainer">
                <Link to="/product/222" className="text-reset">
                  <Item
                    img={dummy}
                    productName="Teckwear Hoodie"
                    price={50}
                    discount={50}
                  />
                </Link>
              </div>
              <div className="primaryContainer">
                <Link to="/product/222" className="text-reset">
                  <Item
                    img={dummy}
                    productName="Teckwear Hoodie"
                    price={50}
                    discount={50}
                  />
                </Link>
              </div>
              <div className="primaryContainer">
                <Link to="/product/222" className="text-reset">
                  <Item
                    img={dummy}
                    productName="Teckwear Hoodie"
                    price={50}
                    discount={50}
                  />
                </Link>
              </div>
              <div className="primaryContainer">
                <Link to="/product/222" className="text-reset">
                  <Item
                    img={dummy}
                    productName="Teckwear Hoodie"
                    price={50}
                    discount={50}
                  />
                </Link>
              </div>
              <div className="primaryContainer">
                <Link to="/product/222" className="text-reset">
                  <Item
                    img={dummy}
                    productName="Teckwear Hoodie"
                    price={50}
                    discount={50}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="reviewsContainer">
            <div className="top">
              <p className="heading">REVIEWS</p>
            </div>

            <div className="bottom" id="bottom">
              <ReviewBox
                pfp={pfp}
                name="James Smith"
                rating={5}
                review={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
              />
              <ReviewBox
                pfp={pfp}
                name="G Smith"
                rating={2}
                review={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
              />
            </div>
          </div>
        </div>
      </AnimatedRoute>
    </>
  );
};

export default ProductPage;
