import * as S from "./style";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/user.store";
import { useEffect } from "react";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { Authority, SuperAdmin } from "../../types/user.type";
import { useModal } from "../../utils/modal";

const SuperAdminHeader = () => {
  const {ajax} = useAjax();
  const {openModal} = useModal();
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    getLoginInfo();
  }, []);

  const getLoginInfo = async () => {
    const [user, error] = await ajax<SuperAdmin>({
      url: 'super',
      method: HttpMethod.GET,
      errorCallback() {
        return true;
      }
    });
    if (error || user.authority !== Authority.SUPER_ADMIN) return openModal('superAdminLogin');
    setUser(user);
  }

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoWrap to='/'>
          <S.Logo alt="logo" src="/image/Adapfit_logo.svg" />
        </S.LogoWrap>
        <S.Nav>
          <NavLink to="/superadmin">관리자계정 관리</NavLink>
          <NavLink to="/superadmin/notice">공지사항 관리</NavLink>
          <S.AccentLink to="/admin">일반관리자 페이지</S.AccentLink>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default SuperAdminHeader;
