import PlanList from "../../components/plan";
import PlanCard from "../../components/plan";
import * as S from "./style";
import React from "react";

export const Plan = () => {
  return (
    <S.Contain className="bottom-padding">
      <S.Category>
        <span>카테고리</span>
        <PlanList />
      </S.Category>
      <S.Category>
        <span>카테고리</span>
        <PlanList />
      </S.Category>
    </S.Contain>
  );
};
