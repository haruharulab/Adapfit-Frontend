import * as S from './style';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { HttpMethod, useAjax } from '../../../utils/ajax';
import { useModal } from '../../../utils/modal';
import { userState } from '../../../store/user.store';
import LoginModal from '../login/login';
import { FaUserAlt } from 'react-icons/fa';
import { Admin, Authority, SuperAdmin } from '../../../types/user.type';
import { useNavigate } from 'react-router-dom';

const AdminSideBar = () => {
  const navigate = useNavigate();
  const {ajax} = useAjax();
  const {openModal} = useModal();
  const [user, setUser] = useRecoilState(userState);
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    getLoginInfo();
  }, []);

  const getLoginInfo = async () => {
    const [admin, error] = await ajax<Admin>({
      url: 'user',
      method: HttpMethod.GET,
      errorCallback() {
        return true;
      }
    });
    if (error) {
        const [superAdmin, error] = await ajax<SuperAdmin>({
            url: 'super',
            method: HttpMethod.GET,
            errorCallback() {
                return true;
            }
        });
        if (error) return openModal('adminLogin');
        return setUser(superAdmin);
    }
    setUser(admin);
  }

  const LoginMenu = () => (
    <S.SideBarItem onClick={() => openModal('adminLogin')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>로그인</S.SideBarItemContent>
    </S.SideBarItem>
  );

  const AdminMenu = () => (<>
    <S.SideBarItem onClick={() => navigate('/admin')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>대시보드</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/plan')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>플랜 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/banner')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>배너 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/employment')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>채용 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => openModal('superAdminLogin')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>슈퍼관리자로 전환</S.SideBarItemContent>
    </S.SideBarItem>
  </>);

  const SuperAdminMenu = () => (<>
    <S.SideBarItem onClick={() => navigate('/admin/adminlist')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>관리자계정 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/notice')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>공지사항 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => openModal('adminLogin')}>
      <S.SideBarItemIcon><FaUserAlt color='white' /></S.SideBarItemIcon>
      <S.SideBarItemContent>일반관리자로 전환</S.SideBarItemContent>
    </S.SideBarItem>
  </>);

  return (
    <S.SideBar isOpen={isOpen}>
      <S.SideBarOnOff onClick={() => setIsOpen(prev => !prev)}>
        {isOpen? '<': '>'}
      </S.SideBarOnOff>
      <S.SideBarHeader>
        <S.Logo
          alt="logo"
          src="/image/Adapfit_logo.svg"
          onClick={() => navigate('/')}
        />
        <p>{
          user.authority !== Authority.NO_LOGIN
          ? `${user.nickname}님 반갑습니다.`
          :'로그인해주세요.'
        }</p>
        <hr />
      </S.SideBarHeader>
      <S.SideBarContentWrap>{
        user.authority === Authority.NO_LOGIN
        ? <LoginMenu />
        : user.authority === Authority.ADMIN
        ? <AdminMenu />
        : user.authority === Authority.SUPER_ADMIN
        && <SuperAdminMenu />
      }</S.SideBarContentWrap>
      <LoginModal />
    </S.SideBar>
  );
}

export default AdminSideBar;
