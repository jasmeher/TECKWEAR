import React from "react";
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
                  <li className="detailItem">S</li>
                  <li className="detailItem">M</li>
                  <li className="detailItem">L</li>
                  <li className="detailItem">XL</li>
                </ul>
              </div>
              <div className="detailsContainer">
                <p className="detailName">Color:</p>
                <ul className="detailList">
                  <li className="detailItem active">White</li>
                  <li className="detailItem">Black</li>
                </ul>
              </div>
              <div className="detailsContainer">
                <p className="detailName">Quantity:</p>
                <p className="quantity">2</p>
              </div>
              <button className="cta w-50 productCTA">ADD TO CART</button>
            </div>

            <div className="bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
