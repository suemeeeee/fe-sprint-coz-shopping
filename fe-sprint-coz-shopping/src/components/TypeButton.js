import React, { useState } from "react";
import { FilterButton } from "../buttons/FilterButton";

export default function TypeButton({ setCurrentType, type }) {
  const [currentButton, setCurrentButton] = useState("all");

  const handleTypeClick = (e) => {
    setCurrentType(e.currentTarget.getAttribute("value"));
    setCurrentButton(e.currentTarget.value);
  };

  return (
    <div>
      <div className="type--button--div">
        <FilterButton
          value={type.ALL}
          primary={currentButton === "all"}
          label={"전체"}
          imgSrc={"../imgs/All.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.PRODUCT}
          primary={currentButton === "Product"}
          label={"상품"}
          imgSrc={"../imgs/Product.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.CATEGORY}
          primary={currentButton === "Category"}
          label={"카테고리"}
          imgSrc={"../imgs/Category.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.EXHIBITION}
          primary={currentButton === "Exhibition"}
          label={"기획전"}
          imgSrc={"../imgs/Exhibition.png"}
          onClick={handleTypeClick}
        ></FilterButton>
        <FilterButton
          value={type.BRAND}
          primary={currentButton === "Brand"}
          label={"브랜드"}
          imgSrc={"../imgs/Brand.png"}
          onClick={handleTypeClick}
        ></FilterButton>
      </div>
    </div>
  );
}
