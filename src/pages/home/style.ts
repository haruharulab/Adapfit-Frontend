import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button, ButtonStyle } from "../../components/common/button/style";
import { Container } from "../../components/common/container/style";
import { Shadow } from "../../components/common/shadow/style";

export const HomeWrap = styled.div`
  text-align: center;
`;

export const BannerImgLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

const Arrow = css`
  position: absolute;
  top: 50%;
  z-index: 2;
`;

export const LeftArrow = styled(IoIosArrowDropleftCircle)`
  transform: translateY(-50%);
  left: 50px;
  ${Arrow}
`;

export const RightArrow = styled(IoIosArrowDroprightCircle)`
  transform: translateY(-50%);
  right: 50px;
  ${Arrow}
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
  filter: blur(10px);
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 65px);
  position: relative;
  @media screen and (max-width: 960px) {
    height: 40vh;
  }
  .swiper-button-next {
    &::after {
      margin-right: 50px;
      font-size: 30px;
      font-weight: bold;
      padding: 10px 18px;
      border-radius: 50%;
      color: black;
      background-color: #ffffff88;
      @media screen and (max-width: 960px) {
        font-size: 20px;
        padding: 10px 15px;
      }
    }
  }
  .swiper-button-prev {
    &::after {
      margin-left: 50px;
      font-size: 30px;
      font-weight: bold;
      padding: 10px 18px;
      border-radius: 50%;
      color: black;
      background-color: #ffffff88;
      @media screen and (max-width: 960px) {
        font-size: 20px;
        padding: 10px 15px;
      }
    }
  }
`;

export const IntroduceWrap = styled.div`
  text-align: center;
  ${Container}
  width: 100%;
  max-width: 900px;
  margin-top: 100px;
  h3 {
    font-size: 46px;
    font-weight: bold;
    @media screen and (max-width: 600px) {
        font-size: 34px;
    }
  }
  img {
    margin-top: 100px;
    width: 100%;
  }
`;

export const Adapfit = styled.h3`
  color: #ff5a28;
`;

export const PlanGallery = styled.div`
  margin: 30px 0;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

export const PlanDetailLink = styled(Link)`
  margin-top: 20px;
  ${ButtonStyle}
`;

export const DownContain = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const DownloadLink = styled.a`
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
  transition: background-color 0.25s;
  background-color: #fff;
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
`;

export const Counselor = styled.div`
  position: fixed;
  top: 600px;
  right: 30px;
  color: gray;
  .counselor {
    size: 24;
  }
`;
