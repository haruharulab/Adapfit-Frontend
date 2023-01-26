import * as S from "./style";
import { useEffect, useState } from "react";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { AccentButton } from "../../../components/common/button/style";
import { PlanCategory } from "../../../types/plan.type";
import ManageCategoryItem from "../../../components/plan/category/manageItem";
import ManageCategoryModal from "./modal";
import CategoryInfoHeader from "../../../components/plan/category/header";
import { levelCheck } from "../../../utils/levelCheck";

const ManagePlanCategory = () => {
  const user = useRecoilValue(userState);
  const { ajax } = useAjax();
  const { openModal } = useModal();
  const [selectCategory, setSelectCategory] = useState<PlanCategory | null>(null);
  const [categoryList, setCategoryList] = useState<PlanCategory[]>([]);

  useEffect(() => {
    if (!levelCheck({requireLevel: 2, user, openModal})) return;
    loadCategoryList();
  }, [user]);

  const loadCategoryList = async () => {
    const [data, error] = await ajax<{
      count: number,
      data: PlanCategory[]
    }>({
      url: 'category',
      method: HttpMethod.GET,
    });
    if (error) return;
    setCategoryList(data.data);
  }

  const deleteCategory = async (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?\n이 카테고리와 연관된 플랜은 모두 삭제되며\n이 작업은 되돌릴 수 없습니다!')) return;
    const [, deleteError] = await ajax({
      url: `category/${id}`,
      method: HttpMethod.DELETE
    });
    if (deleteError) return;
    loadCategoryList();
  };

  return (
    <S.Contain>
      <ManageCategoryModal selectCategory={selectCategory} loadCategoryList={loadCategoryList} />
      <S.Header>플랜 카테고리 관리</S.Header>
      <S.MenuWrap>
        <AccentButton onClick={() => openModal('createCategory')}>카테고리 생성</AccentButton>
      </S.MenuWrap>
      <S.ItemWrap>
        <CategoryInfoHeader />
        <hr />
        {categoryList.map(category => (
          <ManageCategoryItem
            category={category}
            deleteCategory={deleteCategory}
            setSelectCategory={setSelectCategory}
            openModal={openModal}
          />
        ))}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default ManagePlanCategory;
