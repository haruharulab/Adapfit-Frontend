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
import { RiAppStoreFill, RiGooglePlayFill } from "react-icons/ri";

export const Home = () => {
  SwiperCore.use([Autoplay]);
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const [planList, setPlanList] = useState<Plan[]>([]);

  useEffect(() => {
    (async () => setBannerList(await getBannerList()))();
    (async () => setPlanList(await getPlanList()))();
  }, []);

  return (
    <S.HomeWrap>
      <S.Banner>
        {
        planList.length > 0 &&
        <Swiper
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{
            type: 'progressbar',
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {bannerList.map((banner) => (
            <SwiperSlide>
              <S.BannerImgLink target={banner.link? '_blank': ''} href={banner.link || '#'}>
                <S.BannerImg src={banner.fileUrl} className="slider" />
              </S.BannerImgLink>
            </SwiperSlide>
          ))}
        </Swiper>
        }
      </S.Banner>
      <S.IntroduceWrap>
        <S.IntroduceText>
          어댑핏&nbsp;
          <AccentText>맞춤플랜</AccentText>
          의 특별한 시스템
        </S.IntroduceText>
        <br />
        <p>저렴한 가격으로 자유롭게 수강이 가능한 어댑핏 맞춤 플랜을 이용해보세요!</p>
      </S.IntroduceWrap>
      <PlanGallery planList={planList} />
      <S.IntroduceImageWrap>
        <S.IntroduceText>
          <AccentText>맞춤 운동의</AccentText>
          &nbsp;기준,
          <br />
          모두가 차별 없이 건강한 세상
          <br />
          <AccentText>Adapfit</AccentText>
          &nbsp;지금바로 시작해 보세요.
        </S.IntroduceText>
        <S.DownloadWrap>
          <S.DownloadLink
            target="_blank"
            href="https://apps.apple.com/us/app/%EC%96%B4%EB%8C%91%ED%95%8F/id1618654622?l=ko"
          >
            <RiAppStoreFill size={40} />
            App Store
          </S.DownloadLink>
          <S.DownloadLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=kr.adapfit.app"
          >
            <RiGooglePlayFill size={40} />
            Google Play
          </S.DownloadLink>
        </S.DownloadWrap>
      </S.IntroduceImageWrap>
    </S.HomeWrap>
  );
};
