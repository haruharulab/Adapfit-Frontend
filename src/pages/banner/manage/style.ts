import styled from "styled-components";
import { AccentButton } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { Input } from "../../../components/common/input/style";
import { HorizontalScrollBar } from "../../../components/common/scrollBar/style";
import { Shadow } from "../../../components/common/shadow/style";

export const BannerPageWrap = styled.div`
  ${Container}
  ${Shadow}
  margin-top: 70px;
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 34px;
  padding: 0 10px;
  margin: 40px 0;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const BannerListWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
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
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  background-color: #FFF;
  transition: all .25s;
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
