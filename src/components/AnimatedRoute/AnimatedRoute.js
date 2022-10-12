import React from "react";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./../../ScrollToTop";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./../../pages/Home/Home";
import ProductPage from "./../../pages/ProductPage/ProductPage";
import Footer from "./../Footer/Footer";
import Products from "./../../pages/Products/Products";
import SignIn from "./../../pages/SignIn/SignIn";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <ProductPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/products/:gender"
          element={
            <>
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <SignIn />
              <Footer />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
