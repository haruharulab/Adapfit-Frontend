import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ButtonStyle } from "../../components/common/button/style";
import { Shadow } from "../../components/common/shadow/style";

export const HomeWrap = styled.div`
  text-align: center;
  p {
    font-weight: bold;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  }
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
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  min-height: 400px;
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

export const IntroduceText = styled.h3`
  font-size: 46px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
`;

export const IntroduceWrap = styled.div`
  text-align: center;
  width: 100%;
  max-width: 900px;
  margin: 100px auto 70px auto;
  padding: 0 10px;
  img {
    margin-top: 100px;
    width: 100%;
  }
`;

export const IntroduceImageWrap = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url('/image/home/introduce_1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  img {
    margin-top: 100px;
    width: 100%;
  }
`;

export const DownloadWrap = styled.div`
  position: absolute;
  bottom: 75px;
  right: 100px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  background: none;
  transition: background-color 0.25s;
  border: solid 2px white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
