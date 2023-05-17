import React from "react";
import SingleItem from "./SingleItem";
import styled from "styled-components";

const ItemsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MainSectionTitlte = styled.h2`
  margin: 0;
  margin-top: 1rem;
  padding-left: 2rem;
`;

export default function ItemListSection({
  sectionTitle,
  items,
  bookmarkDatas,
  setBookmarkDatas,
}) {
  return (
    <div>
      <MainSectionTitlte>{sectionTitle}</MainSectionTitlte>
      <ItemsSection>
        {items &&
          items.map((item) => {
            return (
              <SingleItem
                className="singleItem"
                item={item}
                bookmarkDatas={bookmarkDatas}
                setBookmarkDatas={setBookmarkDatas}
              ></SingleItem>
            );
          })}
      </ItemsSection>
    </div>
  );
}
