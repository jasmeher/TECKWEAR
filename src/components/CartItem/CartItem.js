import React, { useState, useEffect } from "react";
import "./cartItem.scss";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

const CartItem = ({ img, name }) => {
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
      <div className="cartItemContainer">
        <div className="left">
          <img src={img} alt="" className="productImg" />
        </div>
        <div className="right">
          <div className="top">
            <p className="productName">{name}</p>
            <FiX className="icon" />
          </div>
          <p className="price">$50</p>
          <div className="bottom">
            <div className="detailsContainer">
              <p className="detailTitle">Color: </p>
              <p className="detail">Black</p>
            </div>

            <div className="detailsContainer">
              <p className="detailTitle">Size: </p>
              <p className="detail">L</p>
            </div>

            <div className="detailsContainer">
              <p className="detailTitle">Quantity: </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
