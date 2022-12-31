import React, { useEffect, useState } from "react";
import "./products.scss";
import AnimatedRoute from "./../../components/AnimatedPage/AnimatedPage";
import { FiFilter } from "react-icons/fi";
import Item from "./../../components/Item/Item";
import { useGetProductsQuery } from "../../app/slice/productsApiSlice";
import { useParams } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const Products = () => {
  const { gender } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const catList = ["tops", "bottoms", "footwear", "outerwear"];
  const [selectedCats, setSelectedCats] = useState([]);
  let content;
  const {
    data: productsQuery,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery(gender);
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (isError) {
    content = <p>Error: {error?.data?.message}</p>;
  }
  if (isSuccess) {
    const { ids, entities } = productsQuery;
    let filteredIds = [...ids];

    if (selectedCats.length !== 0) {
      filteredIds = ids.filter((productId) =>
        selectedCats.includes(entities[productId].BIcategory)
      );
    }
    content =
      ids?.length &&
      filteredIds.map((productId) => (
        <div className="productContainer" key={productId}>
          <Item id={productId} />
        </div>
      ));
  }

  const handleCatChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCats(
      isChecked
        ? [...selectedCats, value]
        : selectedCats.filter((cat) => cat !== value)
    );
  };

  const resetFilter = () => {
    setSelectedCats([]);
  };
  const queryParams = new URLSearchParams(window.location.search);
  const tops = queryParams.get("tops");
  const bottoms = queryParams.get("bottoms");
  const footwear = queryParams.get("footwear");
  const outerwear = queryParams.get("outerwear");
  useEffect(() => {
    if (tops) {
      setSelectedCats((prev) => [...prev, "tops"]);
    }
    if (bottoms) {
      setSelectedCats((prev) => [...prev, "bottoms"]);
    }
    if (footwear) {
      setSelectedCats((prev) => [...prev, "footwear"]);
    }
    if (outerwear) {
      setSelectedCats((prev) => [...prev, "outerwear"]);
    }
    if (!tops && !bottoms && !footwear && !outerwear) {
      setSelectedCats([]);
    }
  }, [tops, bottoms, footwear, outerwear]);

  return (
    <>
      <AnimatedRoute>
        <div className="productsContainer">
          <div className="headerContainer">
            <div className="top">
              <h1 className="header">{gender}'S CLOTHING</h1>
            </div>
            <div className="bottom">
              <span className="filter" onClick={handleShow}>
                Filters <FiFilter className="icon" />
              </span>
              <span
                className={selectedCats.length !== 0 ? "filter" : "d-none"}
                onClick={resetFilter}
              >
                Reset Filters
              </span>
            </div>
          </div>

          <div className="productsList">{content}</div>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h2>FILTERS</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="section">
              <p className="sectionTitle">Category</p>
              <ul className="sectionList">
                {catList.map((category) => (
                  <li className="sectionListItem" key={category}>
                    <input
                      type="checkbox"
                      name={category}
                      id={category}
                      value={category}
                      className="filterCheckbox"
                      onChange={handleCatChange}
                      checked={selectedCats.includes(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </li>
                ))}
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </AnimatedRoute>
    </>
  );
};

export default Products;
