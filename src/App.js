import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <Nav />

        <ScrollToTop />
        <Routes>
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
        </Routes>
      </Router>
    </>
  );
};

export default App;
