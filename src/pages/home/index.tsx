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
import { AccentText } from "../../components/common/text/style";
import PlanGallery from "./plan/planGallery";

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
        <Swiper
          navigation
          pagination={{clickable: true}}
          autoplay={{delay: 3000}}
          loop={true}
        >
          {bannerList.map((banner) => (
            <SwiperSlide>
              <S.BannerImgLink target={banner.link? '_blank': ''} href={banner.link || '#'}>
                <S.BannerImg src={banner.fileUrl} className="slider" />
              </S.BannerImgLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Banner>
      <S.IntroduceWrap>
        <h3>
          어댑핏&nbsp;
          <AccentText>맞춤플랜</AccentText>
          의 특별한 시스템
        </h3>
        <br />
        <p>저렴한 가격으로 자유롭게 수강이 가능한 어댑핏 맞춤 플랜을 이용해보세요!</p>
      </S.IntroduceWrap>
      <PlanGallery planList={planList} />
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
