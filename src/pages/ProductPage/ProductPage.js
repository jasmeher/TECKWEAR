import React from "react";
import { Accordion } from "react-bootstrap";
import "./productpage.scss";
import dummy from "./../../static/dummy.webp";
import dummy2 from "./../../static/dummy2.webp";
import ProductCarousel from "./../../components/ProductCarousel/ProductCarousel";

const ProductPage = () => {
  const slides = [
    { url: dummy, title: "dummy1" },
    { url: dummy2, title: "dummy2" },
  ];
  return (
    <>
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
                      checked
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
                <p className="quantity">2</p>
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Facilis modi alias vel ut laudantium eius dolorum quia
                      magnam, laboriosam iure ad quis recusandae voluptate cum
                      eum saepe, quas suscipit perspiciatis animi earum? Nemo,
                      nesciunt eveniet. Incidunt, eveniet tempore ad fugiat
                      possimus mollitia nobis, commodi, voluptate a similique
                      aliquid distinctio laborum?
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
      </div>
    </>
  );
};

export default ProductPage;
