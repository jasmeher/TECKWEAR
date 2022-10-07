import React from "react";
import "./item.scss";

const Item = (props) => {
  const price = props.price - (props.price * props.discount) / 100;

  return (
    <>
      <div className="itemContainer">
        <img src={props.img} alt="" className="itemImg" />
        {props.discount && <p className="sale">SALE</p>}

        <p className="productName">{props.productName}</p>
        <div className="priceContainer">
          <p className={props.discount ? "originPrice" : "d-none"}>
            ${props.price}
          </p>
          <p className="price">
            {props.discount ? "$" + price : "$" + props.price}
          </p>
        </div>

        <button className={props.sm ? "d-none" : "cta"}>ADD TO CART</button>
      </div>
    </>
  );
};

export default Item;
