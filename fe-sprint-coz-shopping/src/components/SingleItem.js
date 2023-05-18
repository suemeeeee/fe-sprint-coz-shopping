import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeFromBookmark } from "../actions/index";

const SingleItemContainer = styled.div`
  padding: 0.4rem 1rem;
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
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
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

const ModalBackground = styled.div`
  z-index: 20;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;

  background-color: rgba(255, 255, 255, 0.4);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > h2 {
    position: absolute;
    left: 4rem;
    bottom: 1.5rem;

    color: white;
  }

  & > .bookmark--icon {
    position: absolute;
    left: 2rem;
    bottom: 1.7rem;
  }

  & > .close--icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const ModalImg = styled.img`
  object-fit: cover;
  width: 744px;
  height: 480px;

  border-radius: 12px;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
`;

export default function SingleItem({ item }) {
  const bookmarkList = useSelector(
    (state) => state.itemReducer.bookmarkedItems
  );
  const dispatch = useDispatch();

  const [isBookmark, setIsBookmark] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const modalRef = useRef();

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

    if (isModalOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOn]);

  const handleItemClick = (e) => {
    if (modalRef.current !== e.target) {
      setIsModalOn(false);
      return;
    }
    setIsModalOn(!isModalOn);
  };

  const handleBookmarkClick = (item) => {
    setIsBookmark(!isBookmark);

    if (bookmarkList && !bookmarkList.map((el) => el.id).includes(item.id)) {
      dispatch(addToBookmark(item));
    } else {
      dispatch(removeFromBookmark(item.id));
    }
  };

  const modal = (item) => {
    if (
      item.type === type.PRODUCT ||
      item.type === type.EXHIBITION ||
      item.type === type.CATEGORY
    ) {
      return (
        <ModalContainer>
          <ModalImg src={item.image_url} alt="아이템 이미지"></ModalImg>
          <CgClose
            className="close--icon"
            size={30}
            color="white"
            onClick={handleItemClick}
          ></CgClose>
          <FaStar
            className="bookmark--icon"
            size="25"
            color={isBookmark ? "var(--bookmarked)" : "var(--notBookmarked)"}
            onClick={() => {
              handleBookmarkClick(item);
            }}
          />
          {item.type === type.CATEGORY && <h2>#{item.title}</h2>}
          {item.type !== type.CATEGORY && <h2>{item.title}</h2>}
        </ModalContainer>
      );
    } else {
      return (
        <ModalContainer>
          <ModalImg src={item.brand_image_url} alt="아이템 이미지"></ModalImg>
          <CgClose
            className="close--icon"
            size={30}
            color="white"
            onClick={handleItemClick}
          ></CgClose>
          <FaStar
            className="bookmark--icon"
            size="25"
            color={isBookmark ? "var(--bookmarked)" : "var(--notBookmarked)"}
            onClick={() => {
              handleBookmarkClick(item);
            }}
          />
          <h2>{item.brand_name}</h2>
        </ModalContainer>
      );
    }
  };

  return (
    <>
      {isModalOn ? <ModalBackground>{modal(item)}</ModalBackground> : <></>}
      {item && item.type === type.PRODUCT && (
        <SingleItemContainer key={item.id} onClick={handleItemClick}>
          <div className="img--div">
            <ItemImage
              src={item.image_url}
              alt="아이템 이미지"
              ref={modalRef}
            />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "var(--bookmarked)" : "var(--notBookmarked)"}
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
        <SingleItemContainer key={item.id} onClick={handleItemClick}>
          <div className="img--div">
            <ItemImage
              src={item.image_url}
              alt="아이템 이미지"
              ref={modalRef}
            />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "var(--bookmarked)" : "var(--notBookmarked)"}
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
        <SingleItemContainer key={item.id} onClick={handleItemClick}>
          <div className="img--div">
            <ItemImage
              src={item.image_url}
              alt="아이템 이미지"
              ref={modalRef}
            />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "var(--bookmarked)" : "var(--notBookmarked)"}
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
        <SingleItemContainer key={item.id} onClick={handleItemClick}>
          <div className="img--div">
            <ItemImage
              src={item.brand_image_url}
              alt="아이템 이미지"
              ref={modalRef}
            />
            <FaStar
              className="bookmark--icon"
              size="25"
              color={isBookmark ? "var(--bookmarked)" : "var(--notBookmarked)"}
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
