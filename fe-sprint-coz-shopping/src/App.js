import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProductsList from "./pages/ProductsList";
import Bookmark from "./pages/Bookmark";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

import React, { useState, useEffect } from "react";

function App() {
  const [itemDatas, setItemDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        console.log(res);
        setItemDatas(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main itemDatas={itemDatas.slice(0, 4)} />} />
        <Route
          path="products/list"
          element={<ProductsList itemDatas={itemDatas} />}
        />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
