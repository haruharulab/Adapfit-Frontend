import styled from "styled-components";
import { HorizontalScrollBar } from "../../components/common/scrollBar/style";

export const BannerImgWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const BannerImg = styled.img`
  position: absolute;
  z-index: 1;
  width: auto;
  height: 600px;
  object-fit: cover;
`;

export const BannerBackgroundImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  filter: blur(5px);
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  padding-bottom: 80px;
`;

export const PlanGallery = styled.div`
  height: 500px;
  padding-left: 30px;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  ${HorizontalScrollBar};
`;

export const DownContain = styled.div`
  text-align: center;
`
export const DownBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 20px;
  height: 150px;
  border: 2px solid #9B9B9B;
  border-radius: 10px;
  span {
    color: gray;
    margin-bottom: 50px;
    margin-left: 15px;
    font-size: 30px;
  }
  img {
    width: 70px;
    height: 40px;
    margin-right: 15px;
  }
`
