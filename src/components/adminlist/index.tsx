import { Dispatch, SetStateAction } from 'react';
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Admin } from "../../types/user.type";
import { DropdownMenu, DropdownMenuOption } from "../common/dropdownMenu";
import * as S from "./style";

interface AdminItemProps {
  admin: Admin,
  deleteAdmin: (id: number) => void,
  setSelectAdmin: Dispatch<SetStateAction<Admin | null>>,
  openModal: (key: string, closeable?: boolean) => void
}

export function AdminItem({
  admin,
  deleteAdmin,
  setSelectAdmin,
  openModal
}: AdminItemProps) {
  const dropdownMenus: DropdownMenuOption[] = [
    {text: '정보 수정', callback: () => {setSelectAdmin(admin);openModal('updateAdmin')}},
    {text: '비밀번호 변경', callback: () => {setSelectAdmin(admin);openModal('updateAdminPw')}},
    {text: '삭제', callback: () => deleteAdmin(admin.userId)}
  ];

  return (
    <S.Contain>
      <S.Name>{admin.nickname}</S.Name>
      <S.Info>{admin.email}</S.Info>
      <S.Info>{admin.authority}</S.Info>
      <S.Info>{admin.phoneNumber}</S.Info>
      <DropdownMenu title={<AiFillSetting size={24} />} menus={dropdownMenus} />
    </S.Contain>
  );
}
