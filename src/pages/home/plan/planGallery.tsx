import * as S from "./planGalleryStyle";
import { Plan } from "../../../types/plan.type";
import HomePlanCard from "./planCard";
import { useEffect, useState } from "react";

interface PlanGalleryProps {
  planList: Plan[]
}

const CARD_ELEMENT_WIDTH = 180;
const CARD_ELEMENT_GAP_WIDTH = 30;

const PlanGallery = ({
  planList
}: PlanGalleryProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCardList, setShowCardList] = useState<Plan[]>([]);

  useEffect(() => updateWindowWidth(), []);
  window.addEventListener('resize', () => updateWindowWidth());

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  const calcCardListLength = () => {
    if (!planList.length) return;

    const cardListLength = Math.ceil(windowWidth / (CARD_ELEMENT_WIDTH + CARD_ELEMENT_GAP_WIDTH));
    const tempCardList: Plan[] = [];
    for (let i=0; i<cardListLength; i++) {
      tempCardList.push(planList[i % planList.length]);
    }
    setShowCardList(tempCardList);
  }

  useEffect(() => {
    calcCardListLength();
  }, [windowWidth, planList]);


  return (
    <S.PlanGallery>{
      showCardList.map(plan => <HomePlanCard plan={plan} />)
    }</S.PlanGallery>
  );
}

export default PlanGallery;