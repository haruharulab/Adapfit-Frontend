import PlanList from "../../../components/plan/planList";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Plan, PlanCategory } from "../../../types/plan.type";
import { getPlanList } from "../../../apis/plan.api";
import PlanCard from "../../../components/plan/card";
import { getCategoryList } from "../../../apis/category.api";
export const PlanHome = () => {
  const [planList, setPlanList] = useState<Plan[]>([]);
  const [showedPlanlist, setShowedPlanList] = useState<Plan[]>([]);
  const [categoryList, setCategoryList] = useState<PlanCategory[]>([
    { name: "afsd", categoryId: 1 },
    { name: "123", categoryId: 2 },
  ]);
  const [nowCategory, setNowCategory] = useState<Number>(0);
  useEffect(() => {
    (async () => setPlanList(await getPlanList()))();
  }, []);
  useEffect(() => {
    (async () => setCategoryList(await getCategoryList()))();
  }, []);
  useEffect(() => {
    if (nowCategory == -1) {
      setShowedPlanList(planList);
    } else if (nowCategory != -1) {
      setShowedPlanList(
        planList.filter((plan) => plan.category.categoryId == nowCategory)
      );
    }
  }, [nowCategory]);
  return (
    <S.Contain>
      <S.Header>
        <select onChange={(e) => setNowCategory(Number(e.target.value))}>
          <option value={-1}>카테고리</option>;
          {categoryList.map((category) => {
            return <option value={category.categoryId}>{category.name}</option>;
          })}
        </select>
      </S.Header>
      <S.Plan>
        {showedPlanlist.map((plan) => (
          <PlanCard plan={plan} />
        ))}
      </S.Plan>
    </S.Contain>
  );
};
