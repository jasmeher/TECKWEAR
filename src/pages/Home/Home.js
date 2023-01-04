import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./home.scss";
import hero from "./../../static/hero.webp";
import Item from "./../../components/Item/Item";
import dummy from "./../../static/dummy.webp";
import dummy2 from "./../../static/dummy2.webp";
import men from "./../../static/men.webp";
import women from "./../../static/women2.webp";
import accessories from "./../../static/accessories2.webp";
import headwear from "./../../static/accessories.webp";
import footwear from "./../../static/footwear.webp";
import jewerly from "./../../static/jewelry.webp";
import AnimatedRoute from "../../components/AnimatedPage/AnimatedPage";
import { useGetProductsQuery } from "../../app/slice/productsApiSlice";
import { resetCart } from "../../app/slice/cartSlice";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

const Home = () => {
  const [menHover, setMenHover] = useState(false);
  const [womenHover, setWomenHover] = useState(false);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const queryParams = new URLSearchParams(window.location.search);
  const sessionId = queryParams.get("session");
  const success = queryParams.get("success");
  const cancelled = queryParams.get("cancelled");
  useEffect(() => {
    if (success) {
      console.log(success);
      dispatch(resetCart());
      handleShow();
      const editOrder = async () => {
        //eslint-disable-next-line
        const response = await fetch(
          `http://localhost:5000/order/single/${sessionId}`,
          {
            method: "PATCH",
          }
        );
      };
      editOrder();
      setTimeout(() => handleClose(), 5000);
    }
    if (cancelled) {
      handleShow();
      setTimeout(() => handleClose(), 5000);
    }
  }, [success, dispatch, cancelled, sessionId]);
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  let content;
  if (isError) {
    content = <p>Error has occured: {error?.data?.message}</p>;
  }
  if (isSuccess) {
    const { ids } = products;
    const filteredIds = ids.slice(0, 6);
    content =
      ids?.length &&
      filteredIds.map((productId) => (
        <div className="primaryContainer" key={productId}>
          <Item id={productId} />
        </div>
      ));
  }
  document.title = "TECKWEAR";

  const changeState = (state, change) => {
    state(change);
  };

  return (
    <>
      <AnimatedRoute>
        <section className="heroSection">
          <div className="left">
            <p className="featured">LATEST COLLECTION</p>
            <p className="collectionName">TECKWEAR</p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              fugiat voluptas odit, suscipit repellat vitae!
            </p>
          </div>
          <div className="middle">
            <img src={hero} alt="" className="heroImg" />
          </div>

          <div className="right">
            <button className="cta alt ctaRedirect">SHOP NOW</button>
          </div>

          <div className="mobile">
            <div className="top">
              <p className="featured">LATEST COLLECTION</p>
            </div>

            <div className="middle">
              <p className="collectionName">TECKWEAR</p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                fugiat voluptas odit, suscipit repellat vitae!
              </p>

              <button className="cta ctaRedirect mb-5">SHOP NOW</button>
            </div>
          </div>
        </section>

        <section className="featuredClothes">
          <Marquee speed={150} gradient={false} className="top">
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
            <p className="featured">FEATURED</p>
          </Marquee>

          <div className="bottom">
            <div className="primaryContainer">
              <Link to="/product/222" className="text-reset">
                <Item
                  img={dummy}
                  productName="Teckwear Hoodie"
                  price={50}
                  discount={50}
                />
              </Link>
            </div>
            <div className="primaryContainer">
              <Item img={dummy} productName="Teckwear Hoodie" price={50} />
            </div>
            <div className="primaryContainer">
              <Item
                img={dummy2}
                productName="Teckwear Jacket"
                price={95}
                discount={15}
              />
            </div>
            <div className="primaryContainer">
              <Item
                img={dummy}
                productName="Teckwear Hoodie"
                price={50}
                discount={50}
              />
            </div>
            <div className="primaryContainer">
              <Item
                img={dummy}
                productName="Teckwear Hoodie"
                price={50}
                discount={50}
              />
            </div>
          </div>
        </section>

        <section className="category">
          <div className="left">
            <div className="top">
              <p className="heading">SHOP FOR</p>
              <p className="text ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                vel commodi eius impedit, perferendis similique eos inventore!
                Ipsam molestiae nihil nostrum quos nam, nesciunt excepturi.
              </p>
            </div>
            <div className="ctaContainer">
              <button
                className="cta ctaRedirect"
                onMouseEnter={() => changeState(setMenHover, true)}
                onMouseLeave={() => changeState(setMenHover, false)}
              >
                MEN
              </button>
              <button
                className="cta ctaRedirect"
                onMouseEnter={() => changeState(setWomenHover, true)}
                onMouseLeave={() => changeState(setWomenHover, false)}
              >
                WOMEN
              </button>
            </div>
          </div>
          <div className="right">
            <img src={men} alt="" className={menHover ? "men hover" : "men"} />
            <img
              src={women}
              alt=""
              className={womenHover ? "women hover" : "women"}
            />
          </div>
        </section>

        <section className="featuredClothes">
          <Marquee speed={150} gradient={false} className="top">
            <p className="featured">NEW ARRIVALS</p>
            <p className="featured">NEW ARRIVALS</p>
            <p className="featured">NEW ARRIVALS</p>
            <p className="featured">NEW ARRIVALS</p>
            <p className="featured">NEW ARRIVALS</p>
            <p className="featured">NEW ARRIVALS</p>
            <p className="featured">NEW ARRIVALS</p>
            <p className="featured">NEW ARRIVALS</p>
          </Marquee>

          <div className="bottom">{content}</div>
        </section>

        <section className="subCategory">
          <div className="catCol">
            <img src={footwear} alt="" className="catImg" />
            <p className="catName">FOOTWEAR</p>
          </div>
          <div className="catCol">
            <img
              src={headwear}
              alt=""
              className="catImg"
              style={{ objectPosition: "top" }}
            />
            <p className="catName">HEADWEAR</p>
          </div>
          <div className="catCol">
            <img src={accessories} alt="" className="catImg" />
            <p className="catName">ACCESSORIES</p>
          </div>
          <div className="catCol">
            <img src={jewerly} alt="" className="catImg" />
            <p className="catName">JEWELRY</p>
          </div>
        </section>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          centered
          size="lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modalBody">
              {success && (
                <div className="modalInner">
                  <BsFillCheckCircleFill className="icon" />

                  <h2 className="confirmation">Order Successful</h2>
                </div>
              )}
              {cancelled && (
                <div className="modalInner">
                  <BsXCircleFill className="icon" />

                  <h2 className="confirmation">Order Cancelled</h2>
                </div>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </AnimatedRoute>
    </>
  );
};

export default Home;
