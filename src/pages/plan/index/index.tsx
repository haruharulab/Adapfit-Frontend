import PlanList from "../../../components/plan/planList";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Plan, PlanCategory } from "../../../types/plan.type";
import { getPlanList } from "../../../apis/plan.api";
import PlanCard from "../../../components/plan/card";
import { getCategoryList } from "../../../apis/category.api";
import { AccentText } from "../../../components/common/text/style";
import { DropdownMenu } from "../../../components/common/dropdownMenu";

export const PlanHome = () => {
  const [planList, setPlanList] = useState<Plan[]>([]);
  const [showedPlanlist, setShowedPlanList] = useState<Plan[]>([]);
  const [categoryList, setCategoryList] = useState<PlanCategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<PlanCategory>({
    categoryId: 0,
    name: '전체 플랜'
  });

  useEffect(() => {
    (async () => {
      const data = await getPlanList();
      const category = await getCategoryList();
      setPlanList(data);
      setShowedPlanList(data);
      setCategoryList([
        {
          categoryId: 0,
          name: '전체 플랜'
        },
        ...category
      ]);
    })();
  }, []);

  useEffect(() => {
    if (currentCategory.categoryId > 0) {
      setShowedPlanList(
        planList.filter((plan) => plan.category.categoryId === currentCategory.categoryId)
      );
    } else {
      setShowedPlanList(planList);
    }
  }, [currentCategory.categoryId, planList]);

  return (
    <S.Contain>
      <S.Header>
        <h2>
          <AccentText>맞춤 플랜을 </AccentText>
          찾아보세요!
        </h2>
      </S.Header>
      <S.MenuWrap>
        <DropdownMenu
          title={currentCategory.name}
          mark={true}
          menus={[
            ...categoryList.map(category => ({
              text: category.name,
              callback() {
                setCurrentCategory(category)
              }
            }))
          ]}
        />
      </S.MenuWrap>
      <S.Plan>
        {showedPlanlist.map(plan => (
          <PlanCard plan={plan} />
        ))}
      </S.Plan>
    </S.Contain>
  );
};
