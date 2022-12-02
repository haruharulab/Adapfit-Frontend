import ConsultHistory from "../../components/consultHistory";
import HireHistory from "../../components/hireHistory";
import LoginedAdminList from "../../components/LoginedAdminList";
import Notice from "../../components/notice";
import * as S from "./style";

export const Admin = () => {
  return (
    <S.Contain className="bottom-padding">
      <S.Contain1>
        <LoginedAdminList />
        <S.Contain2>
          <Notice />
          <S.Contain3>
            <ConsultHistory />
            <HireHistory />
          </S.Contain3>
        </S.Contain2>
      </S.Contain1>
    </S.Contain>
  );
};
