import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products.scss";
import AnimatedRoute from "./../../components/AnimatedPage/AnimatedPage";
import { FiFilter } from "react-icons/fi";
import Item from "./../../components/Item/Item";
import dummy2 from "./../../static/dummy2.webp";
import dummy from "./../../static/dummy.webp";

const Products = () => {
  const [isCatCheckAll, setIsCatCheckAll] = useState(false);
  const [catChecked, setCatChecked] = useState({
    tops: false,
    bottom: false,
    footwear: false,
    outerwear: false,
  });

  const [isSizeCheckAll, setIsSizeCheckAll] = useState(false);
  const [sizeChecked, setSizeChecked] = useState({
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
  });

  const [sortChecked, setSortChecked] = useState({
    newest: false,
    discounts: false,
    bestsellers: false,
    lowToHigh: false,
    highToLow: false,
    featured: false,
  });

  const toggleCheck = (inputName, stateName) => {
    stateName((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  const handleCheck = (value, allCheckState, checkState) => {
    allCheckState(value);
    checkState((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in catChecked) {
      if (catChecked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setIsCatCheckAll(true);
    } else {
      setIsCatCheckAll(false);
    }
  }, [catChecked]);

  useEffect(() => {
    let allChecked = true;
    for (const inputName in sizeChecked) {
      if (sizeChecked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setIsSizeCheckAll(true);
    } else {
      setIsSizeCheckAll(false);
    }
  }, [sizeChecked]);
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
                            onChange={(event) =>
                              handleCheck(
                                event.target.checked,
                                setIsCatCheckAll,
                                setCatChecked
                              )
                            }
                            checked={isCatCheckAll}
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
                            onChange={() => toggleCheck("tops", setCatChecked)}
                            checked={catChecked["tops"]}
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
                            onChange={() =>
                              toggleCheck("bottom", setCatChecked)
                            }
                            checked={catChecked["bottom"]}
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
                            onChange={() =>
                              toggleCheck("footwear", setCatChecked)
                            }
                            checked={catChecked["footwear"]}
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
                            onChange={() =>
                              toggleCheck("outerwear", setCatChecked)
                            }
                            checked={catChecked["outerwear"]}
                          />
                          <label htmlFor="outerwear">Outerwear</label>
                        </li>
                      </ul>
                    </div>
                    <div className="section">
                      <p className="sectionTitle">Size</p>
                      <ul className="sectionList">
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="all"
                            id="all"
                            value="all"
                            className="filterCheckbox"
                            onChange={(event) =>
                              handleCheck(
                                event.target.checked,
                                setIsSizeCheckAll,
                                setSizeChecked
                              )
                            }
                            checked={isSizeCheckAll}
                          />
                          <label htmlFor="all">All</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="xs"
                            id="xs"
                            value="xs"
                            className="filterCheckbox"
                            onChange={() => toggleCheck("xs", setSizeChecked)}
                            checked={sizeChecked["xs"]}
                          />
                          <label htmlFor="xs">XS</label>
                        </li>

                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="s"
                            id="s"
                            value="s"
                            className="filterCheckbox"
                            onChange={() => toggleCheck("s", setSizeChecked)}
                            checked={sizeChecked["s"]}
                          />
                          <label htmlFor="s">S</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="l"
                            id="l"
                            value="l"
                            className="filterCheckbox"
                            onChange={() => toggleCheck("l", setSizeChecked)}
                            checked={sizeChecked["l"]}
                          />
                          <label htmlFor="l">L</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="xl"
                            id="xl"
                            value="xl"
                            className="filterCheckbox"
                            onChange={() => toggleCheck("xl", setSizeChecked)}
                            checked={sizeChecked["xl"]}
                          />
                          <label htmlFor="xl">XL</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="xxl"
                            id="xxl"
                            value="xxl"
                            className="filterCheckbox"
                            onChange={() => toggleCheck("xxl", setSizeChecked)}
                            checked={sizeChecked["xxl"]}
                          />
                          <label htmlFor="xxl">XXL</label>
                        </li>
                      </ul>
                    </div>
                    <div className="section">
                      <p className="sectionTitle">Sort</p>
                      <ul className="sectionList">
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="newest"
                            id="newest"
                            value="newest"
                            className="filterCheckbox"
                            onChange={() =>
                              toggleCheck("newest", setSortChecked)
                            }
                            checked={sortChecked["newest"]}
                          />
                          <label htmlFor="newest">Newest</label>
                        </li>

                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="discounts"
                            id="discounts"
                            value="discounts"
                            className="filterCheckbox"
                            onChange={() =>
                              toggleCheck("discounts", setSortChecked)
                            }
                            checked={sortChecked["discounts"]}
                          />
                          <label htmlFor="discounts">Discounts</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="bestsellers"
                            id="bestsellers"
                            value="bestsellers"
                            className="filterCheckbox"
                            onChange={() =>
                              toggleCheck("bestsellers", setSortChecked)
                            }
                            checked={sortChecked["bestsellers"]}
                          />
                          <label htmlFor="bestsellers">Bestsellers</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="lowToHigh"
                            id="lowToHigh"
                            value="lowToHigh"
                            className="filterCheckbox"
                            onChange={() =>
                              toggleCheck("lowToHigh", setSortChecked)
                            }
                            checked={sortChecked["lowToHigh"]}
                          />
                          <label htmlFor="lowToHigh">Price Low - High</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="highToLow"
                            id="highToLow"
                            value="highToLow"
                            className="filterCheckbox"
                            onChange={() =>
                              toggleCheck("highToLow", setSortChecked)
                            }
                            checked={sortChecked["highToLow"]}
                          />
                          <label htmlFor="highToLow">Price High - Low</label>
                        </li>
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="featured"
                            id="featured"
                            value="featured"
                            className="filterCheckbox"
                            onChange={() =>
                              toggleCheck("featured", setSortChecked)
                            }
                            checked={sortChecked["featured"]}
                          />
                          <label htmlFor="featured">Featured</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>

          <div className="productsList">
            <div className="productContainer">
              <Link to="/product/333" className="text-reset">
                <Item
                  img={dummy}
                  productName="Teckwear Hoodie"
                  price={85}
                  discount={20}
                />
              </Link>
            </div>
            <div className="productContainer">
              <Item
                img={dummy}
                productName="Teckwear Hoodie"
                price={65}
                discount={12}
              />
            </div>
            <div className="productContainer">
              <Item
                img={dummy2}
                productName="Teckwear Windbreaker"
                price={65}
              />
            </div>
            <div className="productContainer">
              <Item
                img={dummy2}
                productName="Teckwear Windbreaker"
                price={65}
              />
            </div>
            <div className="productContainer">
              <Item
                img={dummy2}
                productName="Teckwear Windbreaker"
                price={65}
              />
            </div>
            <div className="productContainer">
              <Item img={dummy} productName="Teckwear Windbreaker" price={65} />
            </div>
            <div className="productContainer">
              <Item img={dummy} productName="Teckwear Windbreaker" price={65} />
            </div>
            <div className="productContainer">
              <Item img={dummy} productName="Teckwear Windbreaker" price={65} />
            </div>
          </div>
        </div>
      </AnimatedRoute>
    </>
  );
};

export default Products;
