import { Admin } from "../../types/user.type";
import * as S from "./style";

interface AdminItemProps extends Admin {
  deleteAdmin: (id: string) => void;
}

export function AdminItem({
  authId,
  nickname,
  email,
  phoneNumber,
  centerInfo,
  deleteAdmin,
}: AdminItemProps) {
  return (
    <S.Contain>
      <S.Name>
        <div onClick={() => deleteAdmin(authId)}>삭제</div>
        <div onClick={() => deleteAdmin(authId)}>수정</div>
        {nickname}
      </S.Name>
      <S.Info>{email}</S.Info>
      <S.Info>{centerInfo}</S.Info>
      <S.Info>{phoneNumber}</S.Info>
    </S.Contain>
  );
}
