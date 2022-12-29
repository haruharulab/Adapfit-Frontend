import { Dispatch, SetStateAction } from "react";
import { AiFillSetting } from "react-icons/ai";
import { PlanCategory } from "../../../types/plan.type";
import { DropdownMenu, DropdownMenuOption } from "../../common/dropdownMenu";
import * as S from "./style";

interface ManageCategoryItemProps {
  category: PlanCategory,
  deleteCategory: (id: number) => void;
  setSelectCategory: Dispatch<SetStateAction<PlanCategory | null>>,
  openModal: (key: string, closeable?: boolean) => void
}

const ManageCategoryItem = ({
  category,
  deleteCategory,
  setSelectCategory,
  openModal
}: ManageCategoryItemProps) => {
  const dropdownMenus: DropdownMenuOption[] = [
    {text: '수정', callback: () => {setSelectCategory(category);openModal('updateCategory')}},
    {text: '삭제', callback: () => deleteCategory(category.categoryId)}
  ];

  return (
    <S.Item as='div'>
      <S.InfoWrap>
        <span>{category.name}</span>
      </S.InfoWrap>
      <DropdownMenu title={<AiFillSetting size={22} color='white' />} menus={dropdownMenus} />
    </S.Item>
  );
}

export default ManageCategoryItem;
