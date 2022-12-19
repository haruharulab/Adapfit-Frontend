import PlanList from "../../../components/plan/planList";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Plan, PlanCategory } from "../../../types/plan.type";
import { getPlanList } from "../../../apis/plan.api";
import PlanCard from "../../../components/plan/card";
import { getCategoryList } from "../../../apis/category.api";
import AdminPlanCard from "../../../components/plan/adminPlanCard";
import RemovePlanCard from "../../../components/plan/adminPlanCard";
export const PlanHome = () => {
  const [planList, setPlanList] = useState<Plan[]>([]);
  const [showedPlanlist, setShowedPlanList] = useState<Plan[]>([]);
  const [categoryList, setCategoryList] = useState<PlanCategory[]>([]);
  const [nowCategory, setNowCategory] = useState<Number>(-1);
  const [removeMode, setRemoveMode] = useState<boolean>(false);
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
        <div onClick={() => setRemoveMode(!removeMode)}>
          {removeMode ? "확인" : "삭제"}
        </div>
        <select onChange={(e) => setNowCategory(Number(e.target.value))}>
          <option value={-1}>카테고리</option>;
          {categoryList.map((category) => {
            return <option value={category.categoryId}>{category.name}</option>;
          })}
        </select>
      </S.Header>
      <S.Plan>
        {showedPlanlist.map((plan) =>
          removeMode ? <RemovePlanCard plan={plan} /> : <PlanCard plan={plan} />
        )}
      </S.Plan>
    </S.Contain>
  );
};
