import React from "react";
import styled from "styled-components";

const SingleTypeButton = styled.button`
  background-color: transparent;
  border: none;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > a {
    font-size: 1rem;
  }
`;

export default function TypeButton({ setCurrentType, type }) {
  const handleTypeClick = (e) => {
    setCurrentType(e.currentTarget.getAttribute("value"));
  };
  return (
    <div>
      <div className="type--button--div">
        <SingleTypeButton value={type.ALL} onClick={handleTypeClick}>
          <img src="../imgs/All.png"></img>
          <a>전체</a>
        </SingleTypeButton>
        <SingleTypeButton value={type.PRODUCT} onClick={handleTypeClick}>
          <img src="../imgs/Product.png"></img>
          <a>상품</a>
        </SingleTypeButton>
        <SingleTypeButton value={type.CATEGORY} onClick={handleTypeClick}>
          <img src="../imgs/Category.png"></img>
          <a>카테고리</a>
        </SingleTypeButton>
        <SingleTypeButton value={type.EXHIBITION} onClick={handleTypeClick}>
          <img src="../imgs/Exhibition.png"></img>
          <a>기획전</a>
        </SingleTypeButton>
        <SingleTypeButton value={type.BRAND} onClick={handleTypeClick}>
          <img src="../imgs/Brand.png"></img>
          <a>브랜드</a>
        </SingleTypeButton>
      </div>
    </div>
  );
}
