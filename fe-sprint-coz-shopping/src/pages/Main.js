import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemListSection from "../components/ItemListSection";

export default function Main({ bookmarkDatas, setBookmarkDatas }) {
  const [itemDatas, setItemDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        console.log(res);
        setItemDatas(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ItemListSection
        sectionTitle="상품 리스트"
        items={itemDatas}
        bookmarkDatas={bookmarkDatas}
        setBookmarkDatas={setBookmarkDatas}
      ></ItemListSection>
      <ItemListSection
        sectionTitle="북마크 리스트"
        items={bookmarkDatas.slice(0, 5)}
        bookmarkDatas={bookmarkDatas}
        setBookmarkDatas={setBookmarkDatas}
      ></ItemListSection>
    </div>
  );
}
