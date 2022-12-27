import styled from "styled-components";
import { AccentButton } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { Input } from "../../../components/common/input/style";
import { HorizontalScrollBar } from "../../../components/common/scrollBar/style";

export const BannerPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 10px;
  margin-top: 100px;
  ${Container}
  h2 {
    margin-top: 50px;
    align-self: flex-start;
    font-size: 36px;
    font-weight: bold;
  }
`;

export const BannerListWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  white-space: nowrap;
  ${HorizontalScrollBar}
`;

export const BannerImgWrap = styled.div`
  position: relative;
  min-width: 300px;
  width: 300px;
  height: 300px;
  display: flex;
  cursor: pointer;
  label {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: gray;
    font-weight: bold;
    cursor: pointer;
    background-color: #FFF;
    transition: all .25s;
    border-radius: 15px;
    &:hover {
      filter: brightness(.7);
    }
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 15px;
  background-color: #FFF;
  transition: all .25s;
  &:hover {
    filter: brightness(.7);
  }
`;

export const BannerDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  padding: 6px 10px;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  font-size: 20px;
  background-color: #FFFFFF88;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #FFFFFF44;
  }
`;

export const BannerLinkInput = styled(Input)`
  position: absolute;
  top: calc(50% - 25px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 230px;
  background-color: #ffffff88;
  backdrop-filter: blur(10px);
`

export const BannerAddButton = styled(AccentButton)`
  position: absolute;
  top: calc(50% + 25px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 230px;
`
