import React, { useEffect } from "react";
import SingleItem from "./SingleItem";
import styled from "styled-components";

const ItemsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MainSectionTitle = styled.h2`
  margin: 0.5rem 0;
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
      <MainSectionTitle>{sectionTitle}</MainSectionTitle>
      <ItemsSection>
        {items &&
          items.map((item) => {
            return (
              <SingleItem
                key={item.id}
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
