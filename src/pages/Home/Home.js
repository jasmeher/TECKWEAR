import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Home = () => {
  const [menHover, setMenHover] = useState(false);
  const [womenHover, setWomenHover] = useState(false);

  const changeState = (state, change) => {
    state(change);
    console.log(menHover);
  };
  return (
    <>
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

        <div className="bottom">
          <div className="primaryContainer">
            <Item
              img={dummy}
              productName="Teckwear Hoodie"
              price={50}
              discount={50}
            />
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
    </>
  );
};

export default Home;
