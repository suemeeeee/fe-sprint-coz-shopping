import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProductsList from "./pages/ProductsList";
import Bookmark from "./pages/Bookmark";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { bookmark } from "./asset/state";
import { useState } from "react";

function App() {
  const [bookmarkDatas, setBookmarkDatas] = useState(bookmark.bookmarkedItems);
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              bookmarkDatas={bookmarkDatas}
              setBookmarkDatas={setBookmarkDatas}
            />
          }
        />
        <Route path="products/list" element={<ProductsList />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
