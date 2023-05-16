import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdown, setIsDropDown] = useState(false);

  const handleClickMenu = () => {
    setIsDropDown(!isDropdown);
  };

  return (
    <header>
      <div className="header--logo--div">
        <Link to="/">
          <img src="../imgs/로고.png"></img>
        </Link>
        <Link to="/">
          <h1>COZ Shopping</h1>
        </Link>
      </div>
      <nav className="header--menu--icon">
        <FiMenu onClick={handleClickMenu} size="30" />
        {isDropdown ? (
          <div className="header--menu--dropdown">
            <div className="poligon"></div>
            <button className="top--dropdown">000님, 안녕하세요!</button>
            <Link to="products/list">
              <button className="middle--dropdown">🎁상품리스트 페이지</button>
            </Link>
            <Link to="/bookmark">
              <button className="bottom--dropdown">⭐북마크 페이지</button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
    </header>
  );
}
