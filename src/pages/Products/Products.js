import React, { useState, useEffect } from "react";
import "./products.scss";
import AnimatedRoute from "./../../components/AnimatedPage/AnimatedPage";
import { FiFilter } from "react-icons/fi";
import Item from "./../../components/Item/Item";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../app/slice/productsApiSlice";

const Products = () => {
  const products = useSelector(selectAllProducts);

  const [isCatCheckAll, setIsCatCheckAll] = useState(true);
  const [catChecked, setCatChecked] = useState({
    tops: true,
    bottoms: true,
    footwear: true,
    outerwear: true,
  });

  const [isSizeCheckAll, setIsSizeCheckAll] = useState(false);
  const [sizeChecked, setSizeChecked] = useState({
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    xxxl: false,
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

  if (catChecked.tops === true) {
    console.log("Check");
  }

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

  if (!products) {
    return <p>No Product found!</p>;
  }
  console.log(products);

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
                            name="bottoms"
                            id="bottoms"
                            value="bottoms"
                            className="filterCheckbox"
                            onChange={() =>
                              toggleCheck("bottoms", setCatChecked)
                            }
                            checked={catChecked["bottoms"]}
                          />
                          <label htmlFor="bottoms">Bottoms</label>
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
                            name="m"
                            id="m"
                            value="m"
                            className="filterCheckbox"
                            onChange={() => toggleCheck("m", setSizeChecked)}
                            checked={sizeChecked["m"]}
                          />
                          <label htmlFor="m">M</label>
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
                        <li className="sectionListItem">
                          <input
                            type="checkbox"
                            name="xxxl"
                            id="xxxl"
                            value="xxxl"
                            className="filterCheckbox"
                            onChange={() => toggleCheck("xxxl", setSizeChecked)}
                            checked={sizeChecked["xxxl"]}
                          />
                          <label htmlFor="xxxl">XXXL</label>
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
            {products.map((product) => (
              <div className="productContainer" key={product._id}>
                <Item
                  id={product._id}
                  name={product.BIproductname}
                  img={product.img[0]}
                  price={product.BIprice.toFixed(2)}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedRoute>
    </>
  );
};

export default Products;
