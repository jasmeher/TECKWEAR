import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Accordion, Modal } from "react-bootstrap";
import "./productpage.scss";
import ProductCarousel from "./../../components/ProductCarousel/ProductCarousel";
import Item from "./../../components/Item/Item";
import ReviewBox from "./../../components/ReviewBox/ReviewBox";
import pfp from "./../../static/pfp.webp";
import { AiFillStar } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import AnimatedRoute from "../../components/AnimatedPage/AnimatedPage";
import { useSelector } from "react-redux";
import {
  selectProductById,
  selectAllProducts,
} from "../../app/slice/productsApiSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const product = useSelector((state) => selectProductById(state, id));
  const allProducts = useSelector(selectAllProducts);
  useEffect(() => {
    if (product) {
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
    }
  }, [qty, product]);
  if (!product) {
    return <p>Product not found</p>;
  }
  if (!allProducts) {
    return <p>Product List not found</p>;
  }

  const filteredProducts = allProducts.filter(
    (filter) => filter.BIproductname !== product.BIproductname
  );
  console.log(filteredProducts);

  const color = product.BIcolor;

  const colorArray = color.split(",");

  const size = product.BIsize;

  const sizeArray = size.split(",");

  console.log(product);

  product.length !== 0 && (document.title = product.BIproductname);

  return (
    <>
      <AnimatedRoute>
        {product.length !== 0 && (
          <div className="productPageContainer">
            <div className="top">
              <p className="links">
                <span className="history">
                  <Link
                    to={`/products/${product.BIgender}`}
                    className="text-reset"
                  >
                    {product.BIgender}
                  </Link>
                  /All/
                </span>
                {console.log(colorArray)}
                <span className="productName">{product.BIproductname}</span>
              </p>
            </div>

            <div className="middle">
              <div className="left">
                <ProductCarousel slides={product.img} />
              </div>

              <div className="right">
                <div className="top">
                  <p className="productName">{product.BIproductname}</p>
                  {product.BIqty >= 80 && <p className="instock">In Stock</p>}
                  {product.BIqty <= 80 && (
                    <p className="lowstock">Low on Stock</p>
                  )}
                  {product.BIqty <= 10 && (
                    <p className="lowstock">Only {product.BIqty} Left</p>
                  )}
                  {product.BIqty === 0 && (
                    <p className="nostock">Out of Stock</p>
                  )}
                  <ul className="ratingUL">
                    {Array(4)
                      .fill()
                      .map((_, i) => (
                        <li className="ratingList">
                          <AiFillStar />
                        </li>
                      ))}
                  </ul>
                  <p className="productPrice">${product.BIprice}.00</p>

                  <div className="detailsContainer">
                    <p className="detailName">Size:</p>
                    <ul className="detailList">
                      {sizeArray.map((size) => {
                        return (
                          <li className="detailItem">
                            <input
                              type="radio"
                              value={size}
                              name="size"
                              id={size}
                            />
                            <label htmlFor={size} className="radioLabel">
                              {size}
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="detailsContainer">
                    <p className="detailName">Color:</p>
                    <ul className="detailList">
                      {colorArray.map((color) => {
                        return (
                          <li className="detailItem">
                            <input
                              type="radio"
                              value={color}
                              name="color"
                              id={color}
                            />
                            <label htmlFor={color}>{color}</label>
                          </li>
                        );
                      })}
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
                        <p
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        ></p>
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
                {filteredProducts.map((product) => (
                  <div className="primaryContainer" key={product.id}>
                    <Link to="/product/222" className="text-reset">
                      <Item
                        img={product.img}
                        productName={product.BIproductname}
                        price={product.BIprice}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="reviewsContainer">
              <div className="top">
                <p className="heading">REVIEWS</p>
                <button className="cta ctaRedirect" onClick={handleShow}>
                  Write a Review
                </button>
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
        )}

        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Write a Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalContainer">
              <form method="post" className="reviewForm">
                <input
                  type="text"
                  className="formInput"
                  placeholder="Enter your Name"
                />

                <textarea
                  name="review"
                  className="textArea"
                  cols="30"
                  rows="10"
                  placeholder="Review"
                ></textarea>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="cta ctaRedirect" onClick={handleClose}>
              Close
            </button>
            <button className="cta ctaRedirect" onClick={handleClose}>
              Submit Review
            </button>
          </Modal.Footer>
        </Modal>
      </AnimatedRoute>
    </>
  );
};

export default ProductPage;
