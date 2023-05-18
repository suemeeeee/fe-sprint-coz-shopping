import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeFromBookmark } from "../actions/index";

const SingleItemContainer = styled.div`
  padding: 0.2rem 1rem;
`;

const ItemImage = styled.img`
  object-fit: cover;
  width: 264px;
  height: 210px;

  border-radius: 12px;
`;

const ItemTitleContainer = styled.div`
  width: 264px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > p {
    color: black;
    font-weight: bold;
  }
  & > .discount--percentage {
    color: #452cdd;
  }
`;

const ItemPriceAndFollower = styled(ItemTitleContainer)`
  justify-content: right;

  & > p {
    font-weight: 400;
  }
`;

const ExhibitionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  p {
    &:first-child {
      color: black;
      font-weight: bold;
    }
  }
`;

export default function SingleItem({ item }) {
  const bookmarkList = useSelector(
    (state) => state.itemReducer.bookmarkedItems
  );
  const dispatch = useDispatch();

  const [isBookmark, setIsBookmark] = useState(false);

  const type = {
    PRODUCT: "Product",
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    BRAND: "Brand",
  };

  useEffect(() => {
    if (bookmarkList && bookmarkList.map((el) => el.id).includes(item.id)) {
      setIsBookmark(true);
    } else {
      setIsBookmark(false);
    }
  }, []);

  const handleBookmarkClick = (item) => {
    setIsBookmark(!isBookmark);

    if (bookmarkList && !bookmarkList.map((el) => el.id).includes(item.id)) {
      dispatch(addToBookmark(item));
    } else {
      dispatch(removeFromBookmark(item.id));
    }
  };

  return (
    <>
      {item && item.type === type.PRODUCT && (
        <SingleItemContainer key={item.id}>
          <div className="img--div">
            <ItemImage src={item.image_url} alt="아이템 이미지" />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "#ffd361" : "#dfdfdf"}
              onClick={() => {
                handleBookmarkClick(item);
              }}
            />
          </div>
          <ItemTitleContainer>
            <p>{item.title}</p>
            <p className="discount--percentage">{item.discountPercentage}%</p>
          </ItemTitleContainer>
          <ItemPriceAndFollower>
            <p>{Number(item.price).toLocaleString("ko-KR")}원</p>
          </ItemPriceAndFollower>
        </SingleItemContainer>
      )}
      {item && item.type === type.CATEGORY && (
        <SingleItemContainer key={item.id}>
          <div className="img--div">
            <ItemImage src={item.image_url} alt="아이템 이미지" />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "#ffd361" : "#dfdfdf"}
              onClick={() => {
                handleBookmarkClick(item);
              }}
              value={item.id}
            />
          </div>
          <ItemTitleContainer>
            <p># {item.title}</p>
          </ItemTitleContainer>
        </SingleItemContainer>
      )}
      {item && item.type === type.EXHIBITION && (
        <SingleItemContainer key={item.id}>
          <div className="img--div">
            <ItemImage src={item.image_url} alt="아이템 이미지" />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "#ffd361" : "#dfdfdf"}
              onClick={() => {
                handleBookmarkClick(item);
              }}
              value={item.id}
            />
          </div>
          <ExhibitionItem>
            <p>{item.title}</p>
            <p>{item.sub_title}</p>
          </ExhibitionItem>
        </SingleItemContainer>
      )}
      {item && item.type === type.BRAND && (
        <SingleItemContainer key={item.id}>
          <div className="img--div">
            <ItemImage src={item.brand_image_url} alt="아이템 이미지" />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "#ffd361" : "#dfdfdf"}
              onClick={() => {
                handleBookmarkClick(item);
              }}
              value={item.id}
            />
          </div>
          <ItemTitleContainer>
            <p>{item.brand_name}</p>
            <p>관심고객수</p>
          </ItemTitleContainer>
          <ItemPriceAndFollower>
            <p>{item.follower.toLocaleString("ko-KR")}</p>
          </ItemPriceAndFollower>
        </SingleItemContainer>
      )}
    </>
  );
}
