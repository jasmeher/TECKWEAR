import React from "react";
import "./products.scss";
import AnimatedRoute from "./../../components/AnimatedPage/AnimatedPage";
import { FiFilter } from "react-icons/fi";

const Products = () => {
  return (
    <>
      <AnimatedRoute>
        <div className="productsContainer">
          <div className="headerContainer">
            <div className="top">
              <h1 className="header">MEN'S CLOTHING</h1>
            </div>
            <div className="bottom">
              <span className="filter">
                Filter <FiFilter className="icon" />
                <div className="filterMenu">
                  <div className="inner">
                    <div className="section">
                      <p className="sectionTitle">Category</p>
                      <ul className="sectionList">
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="all"
                            id="all"
                            value="all"
                            className="filterCheckbox"
                          />
                          <label htmlFor="all">All</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="tops"
                            id="tops"
                            value="tops"
                            className="filterCheckbox"
                          />
                          <label htmlFor="tops">Tops</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="bottom"
                            id="bottom"
                            value="bottom"
                            className="filterCheckbox"
                          />
                          <label htmlFor="bottom">Bottom</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="footwear"
                            id="footwear"
                            value="footwear"
                            className="filterCheckbox"
                          />
                          <label htmlFor="footwear">footwear</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="outerwear"
                            id="outerwear"
                            value="outerwear"
                            className="filterCheckbox"
                          />
                          <label htmlFor="outerwear">Outerwear</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </AnimatedRoute>
    </>
  );
};

export default Products;
