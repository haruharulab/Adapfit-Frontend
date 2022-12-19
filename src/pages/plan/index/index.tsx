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
  const [categoryList, setCategoryList] = useState<PlanCategory[]>([]);
  const [nowCategory, setNowCategory] = useState<Number>(-1);
  useEffect(() => {
    (async () => {
      const data = await getPlanList();
      const category = await getCategoryList();
      setPlanList(data);
      setShowedPlanList(data);
      setCategoryList(category);
    })();
  }, []);
  useEffect(() => {
    if (nowCategory > 0) {
      setShowedPlanList(
        planList.filter((plan) => plan.category.categoryId == nowCategory)
      );
    } else {
      setShowedPlanList(planList);
    }
  }, [nowCategory, planList]);
  return (
    <S.Contain>
      <S.Header>
        <select onChange={(e) => setNowCategory(Number(e.target.value))}>
          <option value={0}>카테고리</option>;
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
