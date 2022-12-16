import { useEffect, useState } from "react";
import * as S from "./style";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";
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
        <div>
            <S.Banner>
                <Swiper
                    className="banner"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    autoplay={{delay: 3000}}
                >
                    {bannerList.map(banner => (
                        <SwiperSlide>
                            <S.BannerImgWrap>
                                <S.BannerImg src={banner.fileUrl} className="slider"/>
                                <S.BannerBackgroundImg src={banner.fileUrl}/>
                            </S.BannerImgWrap>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.Banner>
            <S.PlanGallery>
                <PlanList planList={planList} />
            </S.PlanGallery>
            <S.DownContain>
                <S.DownBox>
                    <span>
                        IOS 다운로드
                    </span>
                    <img src='/image/ios.png'/>
                </S.DownBox>
                <S.DownBox>
                    <span>
                        안드로이드 다운로드
                    </span>
                    <img src='/image/android.png'/>
                </S.DownBox>
            </S.DownContain>
        </div>
    );
};
