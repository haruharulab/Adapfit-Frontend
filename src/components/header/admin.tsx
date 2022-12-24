import * as S from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/user.store";
import { useEffect } from "react";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { Admin, SuperAdmin } from "../../types/user.type";
import { useModal } from "../../utils/modal";

const AdminHeader = () => {
  const {ajax} = useAjax();
  const {openModal, closeModal} = useModal();
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    getLoginInfo();
  }, []);

  const getLoginInfo = async () => {
    const [user, error] = await ajax<Admin>({
      url: 'user',
      method: HttpMethod.GET,
      errorCallback() {
        return true;
      }
    });
    if (error) {
        const [user, error] = await ajax<SuperAdmin>({
            url: 'super',
            method: HttpMethod.GET,
            errorCallback() {
                return true;
            }
        });
        if (error) return openModal('adminLogin');
        return openModal('superAdminLogin');
    }
    setUser(user);
  }

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoWrap to='/'>
          <S.Logo alt="logo" src="/image/Adapfit_logo.svg" />
        </S.LogoWrap>
        <S.Nav>
          <NavLink to="/admin/plan">플랜 관리</NavLink>
          <NavLink to="/admin/banner">배너 관리</NavLink>
          <NavLink to="/admin/employment">채용 관리</NavLink>
          <NavLink to="/admin">대시보드</NavLink>
          <S.AccentLink to="/superadmin">슈퍼관리자 페이지</S.AccentLink>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default AdminHeader;
