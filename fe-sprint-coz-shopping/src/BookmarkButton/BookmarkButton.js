import { css, styled } from "styled-components";
import { FaStar } from "react-icons/fa";

const ButtonContainer = styled.button`
  /* 기본 스타일 제거*/
  border: none;
  outline: none;
  background-color: transparent;

  /* 레이아웃 */

  position: absolute;
  right: 0.5rem;
  bottom: 0.7rem;

  ${(props) =>
    props.primary
      ? css`
          & > svg {
            color: #dfdfdf;
          }
        `
      : css`
          & > svg {
            color: #ffd361;
          }
        `};
`;

export const BookmarkButton = ({ primary, onClick, modal }) => {
  return (
    <ButtonContainer primary={primary} onClick={onClick} modal={modal}>
      <FaStar size={25}></FaStar>
    </ButtonContainer>
  );
};
