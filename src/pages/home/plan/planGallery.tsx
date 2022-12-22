import * as S from "./planGalleryStyle";
import { Plan } from "../../../types/plan.type";
import HomePlanCard from "./planCard";
import { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface PlanGalleryProps {
  planList: Plan[]
}

const CARD_ELEMENT_WIDTH = 180;
const CARD_ELEMENT_GAP_WIDTH = 50;

const PlanGallery = ({
  planList
}: PlanGalleryProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCardList, setShowCardList] = useState<Plan[]>([]);

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', () => updateWindowWidth());
  }, []);

  const updateWindowWidth = () => {
    windowWidth !== window.innerWidth && setWindowWidth(window.innerWidth);
  }

  const calcCardListLength = () => {
    if (!planList.length) return;

    const cardListLength = Math.ceil(windowWidth / (CARD_ELEMENT_WIDTH + CARD_ELEMENT_GAP_WIDTH));
    let tempCardList: Plan[] = [];
    for (let i=0; i<(cardListLength / planList.length); i++) {
      tempCardList = tempCardList.concat(planList);
    }
    setShowCardList(tempCardList);
  }

  useEffect(() => {
    calcCardListLength();
  }, [windowWidth, planList]);

  return (
    <S.PlanGallery>
      <Swiper
        spaceBetween={CARD_ELEMENT_GAP_WIDTH}
        width={CARD_ELEMENT_WIDTH}
        freeMode
        loop
        loopedSlides={showCardList.length}
        autoplay={{
          delay: 1,
          disableOnInteraction: false
        }}
        speed={2000}
        grabCursor
        modules={[FreeMode, Autoplay]}
      >{
        showCardList.map(plan => 
          <SwiperSlide className="home-plan-card">
            <HomePlanCard plan={plan} />
          </SwiperSlide>
        )
      }</Swiper>
    </S.PlanGallery>
  );
}

export default PlanGallery;
