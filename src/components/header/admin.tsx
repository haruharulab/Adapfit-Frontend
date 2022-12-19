import * as S from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user.store";
import { useEffect } from "react";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { Admin, Authority, SuperAdmin } from "../../types/user.type";

const AdminHeader = () => {
  const {ajax} = useAjax();
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    getLoginInfo();
  }, []);

  const getLoginInfo = async () => {
    const [user, error] = await ajax<SuperAdmin | Admin>({
      url: 'user',
      method: HttpMethod.GET,
      errorCallback() {
        return true;
      }
    });
    if (error) return navigate('/admin/login');
    if (user.authority === Authority.SUPER_ADMIN) return navigate('/superadmin');
    setUser(user);
  }

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoWrap to='/'>
          <S.Logo alt="logo" src="/image/Adapfit_logo.svg" />
        </S.LogoWrap>
        <S.Nav>
          <NavLink to="/admin/plan">플랜관리</NavLink>
          <NavLink to="/admin/banner">배너관리</NavLink>
          <NavLink to="/admin/employment">채용관리</NavLink>
          <S.AccentLink to="/superadmin/login">슈퍼관리자 페이지</S.AccentLink>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default AdminHeader;
