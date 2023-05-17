import React from "react";

import ItemListSection from "../components/ItemListSection";

export default function Main({ itemDatas, bookmarkDatas, setBookmarkDatas }) {
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
        items={bookmarkDatas.slice(0, 4)}
        bookmarkDatas={bookmarkDatas}
        setBookmarkDatas={setBookmarkDatas}
      ></ItemListSection>
    </div>
  );
}
