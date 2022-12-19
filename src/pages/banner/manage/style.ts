import styled from "styled-components";
import { HorizontalScrollBar } from "../../../components/common/scrollBar/style";

export const BannerPageWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 100px;
`;

export const BannerListWrap = styled.div`
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
`;

export const BannerImg = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
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
`;
