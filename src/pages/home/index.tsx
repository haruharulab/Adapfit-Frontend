import { useEffect, useState } from "react";
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Banner } from "../../types/banner.type";
import { getBannerList } from "../../apis/banner.api";
import { getPlanList } from "../../apis/plan.api";
import { Plan } from "../../types/plan.type";
import PlanList from "../../components/plan/planList";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Home = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const [planList, setPlanList] = useState<Plan[]>([]);

  useEffect(() => {
    (async () => setBannerList(await getBannerList()))();
    (async () => setPlanList(await getPlanList()))();
  }, []);

  return (
    <S.HomeWrap>
      <S.Banner>
        {/* <S.LeftArrow className="prev" size="40" />
        <S.RightArrow className="next" size="40" /> */}
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {bannerList.map((banner) => (
            <SwiperSlide>
              <S.BannerImgLink target={banner.link? '_blank': ''} href={banner.link || '#'}>
                <S.BannerImg src={banner.fileUrl} className="slider" />
                <S.BannerBackgroundImg src={banner.fileUrl} />
              </S.BannerImgLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Banner>
      <S.IntroduceWrap>
        <h3>
          특별한 당신을 위한
          <br />
          특별한 운동,
        </h3>
        <S.Adapfit>어댑핏!</S.Adapfit>
        <img src="/image/adapfit_introduce.png" alt="" />
      </S.IntroduceWrap>
      <S.PlanGallery>
        <PlanList planList={planList} />
      </S.PlanGallery>
      <S.PlanDetailLink to="/plan">플랜 더보기</S.PlanDetailLink>
      <S.DownContain>
        <S.DownloadLink
          target="_blank"
          href="https://apps.apple.com/us/app/%EC%96%B4%EB%8C%91%ED%95%8F/id1618654622?l=ko"
        >
          <span>IOS 다운로드</span>
          <img src="/image/ios.png" />
        </S.DownloadLink>
        <S.DownloadLink
          target="_blank"
          href="https://play.google.com/store/apps/details?id=kr.adapfit.app"
        >
          <span>안드로이드 다운로드</span>
          <img src="/image/android.png" />
        </S.DownloadLink>
      </S.DownContain>
    </S.HomeWrap>
  );
};
