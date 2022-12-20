import { Admin } from "../../types/user.type";
import * as S from "./style";

interface AdminItemProps extends Admin {
  deleteAdmin: (id: string) => void;
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
  return (
    <S.Contain>
      <S.Name>
        <div onClick={() => deleteAdmin(authId)}>삭제</div>
        <a href={`/superadmin/adminmodify/${userId}`}>
          <div>수정 </div>
        </a>
        {nickname}
      </S.Name>
      <S.Info>{email}</S.Info>
      <S.Info>{authority}</S.Info>
      <S.Info>{phoneNumber}</S.Info>
    </S.Contain>
  );
}
