import React, { useState } from "react";
import styled from "styled-components";

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
  width: 264px;
  p {
    &:first-child {
      color: black;
      font-weight: bold;
    }
  }
`;
export default function SingleItem({ item }) {
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <div>
      {item && item.type === "Product" && (
        <div key={item.id}>
          <ItemImage
            className="singleItem--img"
            src={item.image_url}
            alt="아이템 이미지"
          />
          <ItemTitleContainer>
            <p>{item.title}</p>
            <p className="discount--percentage">{item.discountPercentage}%</p>
          </ItemTitleContainer>
          <ItemPriceAndFollower>
            <p>{Number(item.price).toLocaleString("ko-KR")}원</p>
          </ItemPriceAndFollower>
        </div>
      )}
      {item && item.type === "Category" && (
        <div key={item.id}>
          <ItemImage
            className="singleItem--img"
            src={item.image_url}
            alt="아이템 이미지"
          />
          <ItemTitleContainer>
            <p># {item.title}</p>
          </ItemTitleContainer>
        </div>
      )}
      {item && item.type === "Exhibition" && (
        <div key={item.id}>
          <ItemImage
            className="singleItem--img"
            src={item.image_url}
            alt="아이템 이미지"
          />
          <ExhibitionItem>
            <p>{item.title}</p>
            <p>{item.sub_title}</p>
          </ExhibitionItem>
        </div>
      )}
      {item && item.type === "Brand" && (
        <div key={item.id}>
          <ItemImage
            className="singleItem--img"
            src={item.brand_image_url}
            alt="아이템 이미지"
          />
          <ItemTitleContainer>
            <p>{item.brand_name}</p>
            <p>관심고객수</p>
          </ItemTitleContainer>
          <ItemPriceAndFollower>
            <p>{item.follower.toLocaleString("ko-KR")}</p>
          </ItemPriceAndFollower>
        </div>
      )}
    </div>
  );
}
