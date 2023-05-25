import { css, styled } from "styled-components";
import { LabelText } from "../atoms/Typography";

const ButtonContainer = styled.button`
  /* 기본 스타일 제거*/
  border: none;
  outline: none;
  background-color: transparent;

  /* 레이아웃 */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;

  & > img {
    width: 82px;
    height: 82px;
    border-radius: 100%;
  }

  ${(props) =>
    props.primary
      ? css`
          /* Primary 버튼 스타일 */
          & > h3 {
            color: #412dd4;
            border-bottom: solid 2px #412dd4;
          }
        `
      : css`
          /* Secondary 버튼 스타일 */
        `}
`;
export const FilterButton = ({ primary, label, imgSrc, ...rest }) => {
  return (
    <ButtonContainer primary={primary} gap={10} {...rest}>
      {imgSrc && <img src={imgSrc}></img>}
      {label && <LabelText>{label}</LabelText>}
    </ButtonContainer>
  );
};
