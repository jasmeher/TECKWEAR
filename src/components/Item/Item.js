import React from "react";
import { Link } from "react-router-dom";
import "./item.scss";

const Item = (props) => {
  return (
    <>
      <Link to={`/product/${props.id}`} className="text-reset">
        <div className="itemContainer">
          <img src={props.img} alt="" className="itemImg" />
          {/* {discount && <p className="sale">SALE</p>} */}
          <p className="productName">{props.name}</p>
          <div className="priceContainer">
            {/* <p className={props.discount ? "originPrice" : "d-none"}>
                ${props.price}
              </p> */}
            <p className="price">
              {/* {props.discount ? "$" + price : "$" + props.price} */}$
              {props.price}
            </p>
          </div>
          <button className="cta">ADD TO CART</button>
        </div>
      </Link>
    </>
  );
};

export default Item;
