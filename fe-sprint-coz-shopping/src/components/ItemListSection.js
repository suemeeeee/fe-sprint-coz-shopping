import React from "react";
import SingleItem from "./SingleItem";
import styled from "styled-components";

const ItemsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MainSectionTitle = styled.h2`
  margin: 1rem 0;
  padding-left: 3.5rem;
`;

export default function ItemListSection({ sectionTitle, items }) {
  return (
    <div>
      <MainSectionTitle>{sectionTitle}</MainSectionTitle>
      <ItemsSection>
        {items &&
          items.map((item) => {
            return <SingleItem key={item.id} item={item}></SingleItem>;
          })}
      </ItemsSection>
    </div>
  );
}
