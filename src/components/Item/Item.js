import React from "react";
import { useNavigate } from "react-router-dom";
import "./item.scss";
import { useSelector } from "react-redux";
import { selectProductById } from "../../pages/Products/productsApiSlice";

const Item = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));
  const navigate = useNavigate();
  if (product) {
    const handleLink = () => navigate(`/product/${productId}`);
    return (
      <>
        <div className="itemContainer" onClick={handleLink}>
          <img src={product.img} alt="" className="itemImg" />
          {/* {discount && <p className="sale">SALE</p>} */}

          <p className="productName">{product.BIproductname}</p>
          <div className="priceContainer">
            {/* <p className={props.discount ? "originPrice" : "d-none"}>
              ${props.price}
            </p> */}
            <p className="price">
              {/* {props.discount ? "$" + price : "$" + props.price} */}$
              {product.BIprice}
            </p>
          </div>

          <button className="cta">ADD TO CART</button>
        </div>
      </>
    );
  } else return null;
};

export default Item;
