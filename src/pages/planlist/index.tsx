import PlanList from "../../components/plan";
import PlanCard from "../../components/plan";
import * as S from "./style";
import React from "react";

export const Plan = () => {
  return (
    <S.Contain>
      <S.Category>
        <span>카테고리1</span>
        <PlanList />
      </S.Category>
      <S.Category>
        <span>카테고리2</span>
        <PlanList />
      </S.Category>
      <S.Category>
        <span>카테고리2</span>
        <PlanList />
      </S.Category>
      <S.Category>
        <span>카테고리2</span>
        <PlanList />
      </S.Category>
      <S.Category>
        <span>카테고리2</span>
        <PlanList />
      </S.Category>
    </S.Contain>
  );
};
