import React from "react";
import ItemListSection from "../components/ItemListSection";
import { useSelector } from "react-redux";

export default function Main({ itemDatas }) {
  const bookmarkList = useSelector(
    (state) => state.itemReducer.bookmarkedItems
  );
  return (
    <div>
      <ItemListSection
        sectionTitle="상품 리스트"
        items={itemDatas}
      ></ItemListSection>
      <ItemListSection
        sectionTitle="북마크 리스트"
        items={bookmarkList.slice(0, 4)}
      ></ItemListSection>
    </div>
  );
}
