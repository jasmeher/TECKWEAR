import React, { useState } from "react";
import "./cartItem.scss";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectProductById } from "../../app/slice/productsApiSlice";

const CartItem = ({ id, quantity, color, size }) => {
  const product = useSelector((state) => selectProductById(state, id));
  const [qty, setQty] = useState(quantity);
  return (
    <>
      <div className="cartItemContainer">
        <div className="left">
          <img src={product.img[0]} alt="" className="productImg" />
        </div>
        <div className="right">
          <div className="top">
            <p className="productName">{product.BIproductname}</p>
            <FiX className="icon" />
          </div>
          <p className="price">${product.BIprice}</p>
          <div className="bottom">
            <div className="detailsContainer">
              <p className="detailTitle">Color: </p>
              <p className="detail">{color}</p>
            </div>

            <div className="detailsContainer">
              <p className="detailTitle">Size: </p>
              <p className="detail">{size}</p>
            </div>

            <div className="detailsContainer">
              <p className="detailTitle">Quantity: </p>
              <div className="quantityContainer">
                <div
                  className={`arrow ${qty === 1 && "disabled"}`}
                  onClick={() => setQty((prev) => (prev === 1 ? 1 : prev + 1))}
                  id="left-arrow"
                >
                  <FiArrowLeft />
                </div>
                <p className="quantity">{qty}</p>
                <div
                  className={`arrow ${qty === 5 && "disabled"}`}
                  onClick={() => setQty((prev) => (prev === 5 ? 5 : prev - 1))}
                  id="right-arrow"
                >
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
