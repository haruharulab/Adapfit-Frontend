import { useNavigate } from "react-router-dom";
import { Admin } from "../../types/user.type";
import { DropdownMenu, DropdownMenuOption } from "../common/dropdownMenu";
import * as S from "./style";

interface AdminItemProps extends Admin {
  deleteAdmin: (id: number) => void;
}

export function AdminItem({
  userId,
  authId,
  nickname,
  email,
  phoneNumber,
  authority,
  deleteAdmin,
}: AdminItemProps) {
  const navigate = useNavigate();
  const dropdownMenus: DropdownMenuOption[] = [
    {text: '정보 수정', callback: () => navigate(`/superadmin/admin/${userId}`)},
    {text: '비밀번호 변경', callback: () => navigate(`/superadmin/admin/${userId}`)},
    {text: '삭제', callback: () => deleteAdmin(userId)}
  ];

  return (
    <S.Contain>
      <S.Name>
        <DropdownMenu title='관리' menus={dropdownMenus} />
        {nickname}
      </S.Name>
      <S.Info>{email}</S.Info>
      <S.Info>{authority}</S.Info>
      <S.Info>{phoneNumber}</S.Info>
    </S.Contain>
  );
}
