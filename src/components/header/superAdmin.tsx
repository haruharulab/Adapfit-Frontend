import * as S from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user.store";
import { useEffect } from "react";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { Admin, Authority, SuperAdmin } from "../../types/user.type";

const SuperAdminHeader = () => {
  const {ajax} = useAjax();
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    getLoginInfo();
  }, []);

  const getLoginInfo = async () => {
    const [user, error] = await ajax<SuperAdmin | Admin>({
      url: 'super',
      method: HttpMethod.GET,
      errorCallback() {
        return true;
      }
    });
    if (error || user.authority !== Authority.SUPER_ADMIN) return navigate('/superadmin/login');
    setUser(user);
  }

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoWrap to='/'>
          <S.Logo alt="logo" src="/image/Adapfit_logo.svg" />
        </S.LogoWrap>
        <S.Nav>
          <NavLink to="/admin/manage">관리자계정 관리</NavLink>
          <S.AccentLink to="/admin/login">일반관리자 로그인</S.AccentLink>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default SuperAdminHeader;
