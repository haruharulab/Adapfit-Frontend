import { Admin } from "../../types/user.type";
import * as S from "./style";
export function AdminItem({ nickname, email, phoneNumber, centerInfo }: Admin) {
  return (
    <S.Contain>
      <S.Name>{nickname}</S.Name>
      <S.Info>{email}</S.Info>
      <S.Info>{centerInfo}</S.Info>
      <S.Info>{phoneNumber}</S.Info>
    </S.Contain>
  );
}
