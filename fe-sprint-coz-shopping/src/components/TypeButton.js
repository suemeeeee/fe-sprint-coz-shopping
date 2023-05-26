import React, { useState } from "react";
import { FilterButton } from "../buttons/FilterButton";

export default function TypeButton({ setCurrentType, type }) {
  const [currentButton, setCurrentButton] = useState(type.ALL);

  const handleTypeClick = (e) => {
    setCurrentType(e.currentTarget.getAttribute("value"));
    setCurrentButton(e.currentTarget.value);
  };

  return (
    <div>
      <div className="type--button--div">
        <FilterButton
          value={type.ALL}
          primary={currentButton === type.ALL}
          label={"전체"}
          imgSrc={"../imgs/All.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.PRODUCT}
          primary={currentButton === type.PRODUCT}
          label={"상품"}
          imgSrc={"../imgs/Product.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.CATEGORY}
          primary={currentButton === type.CATEGORY}
          label={"카테고리"}
          imgSrc={"../imgs/Category.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.EXHIBITION}
          primary={currentButton === type.EXHIBITION}
          label={"기획전"}
          imgSrc={"../imgs/Exhibition.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.BRAND}
          primary={currentButton === type.BRAND}
          label={"브랜드"}
          imgSrc={"../imgs/Brand.png"}
          onClick={handleTypeClick}
        ></FilterButton>
      </div>
    </div>
  );
}
