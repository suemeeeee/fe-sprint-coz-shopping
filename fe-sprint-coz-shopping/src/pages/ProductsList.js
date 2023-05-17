import React, { useState } from "react";
import TypeButton from "../components/TypeButton";
import SingleItem from "../components/SingleItem";
import styled from "styled-components";

const ItemsSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export default function ProductsList({
  itemDatas,
  bookmarkDatas,
  setBookmarkDatas,
}) {
  const type = {
    ALL: "all",
    PRODUCT: "Product",
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    BRAND: "Brand",
  };

  const [currentType, setCurrentType] = useState(type.ALL);

  return (
    <div className="products--list--div">
      <TypeButton setCurrentType={setCurrentType} type={type} />
      <ItemsSection>
        {currentType === type.ALL &&
          itemDatas.map((item) => {
            return (
              <SingleItem
                key={item.id}
                item={item}
                bookmarkDatas={bookmarkDatas}
                setBookmarkDatas={setBookmarkDatas}
              ></SingleItem>
            );
          })}
        {currentType === type.PRODUCT &&
          itemDatas.map((item) => {
            if (item.type === type.PRODUCT) {
              return (
                <SingleItem
                  key={item.id}
                  item={item}
                  bookmarkDatas={bookmarkDatas}
                  setBookmarkDatas={setBookmarkDatas}
                ></SingleItem>
              );
            }
          })}
        {currentType === type.CATEGORY &&
          itemDatas.map((item) => {
            if (item.type === type.CATEGORY) {
              return (
                <SingleItem
                  key={item.id}
                  item={item}
                  bookmarkDatas={bookmarkDatas}
                  setBookmarkDatas={setBookmarkDatas}
                ></SingleItem>
              );
            }
          })}
        {currentType === type.EXHIBITION &&
          itemDatas.map((item) => {
            if (item.type === type.EXHIBITION) {
              return (
                <SingleItem
                  key={item.id}
                  item={item}
                  bookmarkDatas={bookmarkDatas}
                  setBookmarkDatas={setBookmarkDatas}
                ></SingleItem>
              );
            }
          })}
        {currentType === type.BRAND &&
          itemDatas.map((item) => {
            if (item.type === type.BRAND) {
              return (
                <SingleItem
                  key={item.id}
                  item={item}
                  bookmarkDatas={bookmarkDatas}
                  setBookmarkDatas={setBookmarkDatas}
                ></SingleItem>
              );
            }
          })}
      </ItemsSection>
    </div>
  );
}
