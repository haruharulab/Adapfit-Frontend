import React from "react";
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Home = () => {
  return (
    <>
      <S.Banner>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <S.BannerImg src="images/mainimg.png" className="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <S.BannerImg src="images/2.png" className="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <S.BannerImg src="images/3.png" className="slider" />
          </SwiperSlide>
        </Swiper>
      </S.Banner>

      <S.PlanGallery>
        <S.PlanList>
          <S.PlanImg src="images/1.png" />
          <b>플랜 설명1</b>
          <br></br>
          플랜보조설명입니다.
        </S.PlanList>
        <S.PlanList>
          <S.PlanImg src="images/2.png" />
          <b>플랜 설명2</b>
          <br></br>
          플랜보조설명입니다.
        </S.PlanList>
        <S.PlanList>
          <S.PlanImg src="images/3.png" />
          <b>플랜 설명3</b>
          <br></br>
          플랜보조설명입니다.
        </S.PlanList>
      </S.PlanGallery>
    </>
  );
};
