import * as S from "./style";
import { useEffect, useState } from "react";
import { Plan, PlanCategory } from "../../../types/plan.type";
import { getPlanList } from "../../../apis/plan.api";
import { getCategoryList } from "../../../apis/category.api";
import ManagePlanCard from "../../../components/plan/adminPlanCard";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { Link } from "react-router-dom";

export const PlanHome = () => {
  const { ajax } = useAjax();
  const [planList, setPlanList] = useState<Plan[]>([]);
  const [showedPlanlist, setShowedPlanList] = useState<Plan[]>([]);
  const [categoryList, setCategoryList] = useState<PlanCategory[]>([]);
  const [nowCategory, setNowCategory] = useState<Number>(-1);
  const [removeMode, setRemoveMode] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const category = await getCategoryList();
      setCategoryList(category);
    })();
    (async () => {
      const data = await getPlanList();
      setPlanList(data);
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
  }, [categoryList, planList, nowCategory]);

  const deletePlan = async (id: number) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const [, error] = await ajax({
      url: `plan/${id}`,
      method: HttpMethod.DELETE,
    });
    if (error) return;

    const data = await getPlanList();
    setPlanList(data);
  };

  return (
    <S.Contain>
      <S.Header>
        <div onClick={() => setRemoveMode(!removeMode)}>
          {removeMode ? "확인" : "삭제"}
        </div>
        <Link to='/admin/plan/create'>
            <div>추가</div>
        </Link>
        <select onChange={(e) => setNowCategory(Number(e.target.value))}>
          <option value={-1}>카테고리</option>;
          {categoryList.map((category) => {
            return <option value={category.categoryId}>{category.name}</option>;
          })}
        </select>
      </S.Header>
      <S.Plan>
        {showedPlanlist.map((plan) => (
          <ManagePlanCard
            plan={plan}
            removeMode={removeMode}
            deletePlan={deletePlan}
          />
        ))}
      </S.Plan>
    </S.Contain>
  );
};
