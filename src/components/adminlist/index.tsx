import { Dispatch, SetStateAction } from 'react';
import { AiFillSetting } from "react-icons/ai";
import { Admin } from "../../types/user.type";
import { DropdownMenu, DropdownMenuOption } from "../common/dropdownMenu";
import * as S from "./style";

interface AdminItemProps {
  admin: Admin,
  deleteAdmin: (id: number) => void,
  setSelectAdmin: Dispatch<SetStateAction<Admin | null>>,
  openModal: (key: string, closeable?: boolean) => void
}

const AdminItem = ({
  admin,
  deleteAdmin,
  setSelectAdmin,
  openModal
}: AdminItemProps) => {
  const dropdownMenus: DropdownMenuOption[] = [
    {text: '정보 수정', callback: () => {setSelectAdmin(admin);openModal('updateAdmin')}},
    {text: '비밀번호 변경', callback: () => {setSelectAdmin(admin);openModal('updateAdminPw')}},
    {text: '삭제', callback: () => deleteAdmin(admin.userId)}
  ];

  return (
    <S.Item>
      <S.InfoWrap>
        <span>{admin.authId}</span>
        <span>{admin.nickname}</span>
        <S.Email href={`mailto:${admin.email}`}>{admin.email}</S.Email>
        <span>{admin.phoneNumber}</span>
      </S.InfoWrap>
      <DropdownMenu title={<AiFillSetting size={22} color='white' />} menus={dropdownMenus} />
    </S.Item>
  );
}

export default AdminItem;
