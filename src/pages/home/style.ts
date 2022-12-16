import styled from "styled-components";
import { HorizontalScrollBar } from "../../components/common/scrollBar/style";
import { Shadow } from "../../components/common/shadow/style";

export const BannerImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  @media screen and (max-width: 960px) {
    height: 30vh;
  }
  position: relative;
  overflow: hidden;
  user-select: none;
`;

export const BannerImg = styled.img`
  position: absolute;
  z-index: 1;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  `;

export const BannerBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.02);
  object-fit: cover;
  filter: blur(5px);
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  padding-bottom: 80px;
  @media screen and (max-width: 960px) {
    height: 30vh;
  }
`;

export const PlanGallery = styled.div`
  height: 400px;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  ${HorizontalScrollBar};
`;

export const DownContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;
  @media screen and (max-width: 960px) {
      flex-direction: column;
  }
`
export const DownBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 100px;
  padding: 0 40px;
  border-radius: 10px;
  ${Shadow}
  span {
    color: gray;
    font-size: 25px;
  }
  img {
    width: 70px;
    height: auto;
  }
  transition: background-color .25s;
  background-color: #FFF;
  cursor: pointer;
  &:hover {
    background-color: #00000022;
  }
  @media screen and (max-width: 450px) {
    width: 250px;
    span {
        font-size: 20px;
    }
    img {
      width: 60px;
    }
  }
`
