import React, { useEffect, useRef, useState } from "react";
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
    color: black;
  }

  & > .type--clicked {
    font-weight: bold;
    color: var(--theme-color);
    border-bottom: solid 3px;
  }
`;

export default function TypeButton({ setCurrentType, type }) {
  const [currentButton, setCurrentButton] = useState("all");

  const handleTypeClick = (e) => {
    setCurrentType(e.currentTarget.getAttribute("value"));
    setCurrentButton(e.currentTarget.value);
  };
  console.log(currentButton);
  return (
    <div>
      <div className="type--button--div">
        <SingleTypeButton value={type.ALL} onClick={handleTypeClick}>
          <img src="../imgs/All.png" alt="버튼 이미지"></img>
          <a
            href="#!"
            className={currentButton === type.ALL ? "type--clicked" : ""}
          >
            전체
          </a>
        </SingleTypeButton>
        <SingleTypeButton value={type.PRODUCT} onClick={handleTypeClick}>
          <img src="../imgs/Product.png" alt="버튼 이미지"></img>
          <a
            href="#!"
            className={currentButton === type.PRODUCT ? "type--clicked" : ""}
          >
            상품
          </a>
        </SingleTypeButton>
        <SingleTypeButton value={type.CATEGORY} onClick={handleTypeClick}>
          <img src="../imgs/Category.png" alt="버튼 이미지"></img>
          <a
            href="#!"
            className={currentButton === type.CATEGORY ? "type--clicked" : ""}
          >
            {" "}
            카테고리
          </a>
        </SingleTypeButton>
        <SingleTypeButton value={type.EXHIBITION} onClick={handleTypeClick}>
          <img src="../imgs/Exhibition.png" alt="버튼 이미지"></img>
          <a
            href="#!"
            className={currentButton === type.EXHIBITION ? "type--clicked" : ""}
          >
            기획전
          </a>
        </SingleTypeButton>
        <SingleTypeButton value={type.BRAND} onClick={handleTypeClick}>
          <img src="../imgs/Brand.png" alt="버튼 이미지"></img>
          <a
            href="#!"
            className={currentButton === type.BRAND ? "type--clicked" : ""}
          >
            브랜드
          </a>
        </SingleTypeButton>
      </div>
    </div>
  );
}
