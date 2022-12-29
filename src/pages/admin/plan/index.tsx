import * as S from "./style";
import { useEffect, useState } from "react";
import { Plan, PlanCategory } from "../../../types/plan.type";
import { getPlanList } from "../../../apis/plan.api";
import { getCategoryList } from "../../../apis/category.api";
import ManagePlanCard from "../../../components/plan/adminPlanCard";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { Link } from "react-router-dom";
import { AccentButton } from "../../../components/common/button/style";
import { DropdownMenu } from "../../../components/common/dropdownMenu";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { useModal } from "../../../utils/modal";
import { Authority } from "../../../types/user.type";

export const PlanHome = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();
  const { ajax } = useAjax();
  const [planList, setPlanList] = useState<Plan[]>([]);
  const [showedPlanlist, setShowedPlanList] = useState<Plan[]>([]);
  const [categoryList, setCategoryList] = useState<PlanCategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<PlanCategory>({
    categoryId: 0,
    name: '전체 플랜'
  });
  const [removeMode, setRemoveMode] = useState<boolean>(false);
  
  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ADMIN) return openModal('adminLogin');

    (async () => {
      const category = await getCategoryList();
      setCategoryList([
        {
          categoryId: 0,
          name: '전체 플랜'
        },
        ...category
      ]);
    })();
    (async () => {
      const data = await getPlanList();
      setPlanList(data);
    })();
  }, [user]);

  useEffect(() => {
    if (currentCategory.categoryId > 0) {
      setShowedPlanList(
        planList.filter((plan) => plan.category.categoryId === currentCategory.categoryId)
      );
    } else {
      setShowedPlanList(planList);
    }
  }, [currentCategory.categoryId, planList]);

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
      <S.Header>플랜 관리</S.Header>
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
        <AccentButton onClick={() => setRemoveMode(!removeMode)}>
          {removeMode ? "확인" : "삭제"}
        </AccentButton>
        <Link to='/admin/plan/create'>
            <AccentButton>추가</AccentButton>
        </Link>
      </S.MenuWrap>
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
