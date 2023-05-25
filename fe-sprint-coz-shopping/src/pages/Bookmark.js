import React, { useState } from "react";
import { useSelector } from "react-redux";
import TypeButton from "../components/TypeButton";
import styled from "styled-components";
import SingleItem from "../components/SingleItem";

const ItemsSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export default function Bookmark() {
  const type = {
    ALL: "all",
    PRODUCT: "Product",
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    BRAND: "Brand",
  };

  const [currentType, setCurrentType] = useState(type.ALL);

  const bookmarkList = useSelector(
    (state) => state.itemReducer.bookmarkedItems
  );

  return (
    <div className="products--list--div">
      <TypeButton setCurrentType={setCurrentType} type={type} />
      <ItemsSection>
        {currentType === type.ALL &&
          bookmarkList.map((item) => {
            return <SingleItem key={item.id} item={item}></SingleItem>;
          })}
        {currentType === type.PRODUCT &&
          bookmarkList.map((item) => {
            if (item.type === type.PRODUCT) {
              return <SingleItem key={item.id} item={item}></SingleItem>;
            }
          })}
        {currentType === type.CATEGORY &&
          bookmarkList.map((item) => {
            if (item.type === type.CATEGORY) {
              return <SingleItem key={item.id} item={item}></SingleItem>;
            }
          })}
        {currentType === type.EXHIBITION &&
          bookmarkList.map((item) => {
            if (item.type === type.EXHIBITION) {
              return <SingleItem key={item.id} item={item}></SingleItem>;
            }
          })}
        {currentType === type.BRAND &&
          bookmarkList.map((item) => {
            if (item.type === type.BRAND) {
              return <SingleItem key={item.id} item={item}></SingleItem>;
            }
          })}
      </ItemsSection>
    </div>
  );
}
