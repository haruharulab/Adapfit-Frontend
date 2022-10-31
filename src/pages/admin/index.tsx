import History from "../../components/history";
import LoginedAdminList from "../../components/LoginedAdminList";
import Notice from "../../components/notice";
import * as S from "./style";

export default function Admin() {
  return (
    <S.Contain1>
      <LoginedAdminList />
      <S.Contain2>
        <Notice />
        <S.Contain3>
          <History />
          <History />
        </S.Contain3>
      </S.Contain2>
    </S.Contain1>
  );
}
