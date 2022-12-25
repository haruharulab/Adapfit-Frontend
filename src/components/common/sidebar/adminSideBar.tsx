import * as S from './style';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { HttpMethod, useAjax } from '../../../utils/ajax';
import { useModal } from '../../../utils/modal';
import { userState } from '../../../store/user.store';
import LoginModal from '../login';
import { FaBullhorn, FaThList, FaUserAlt, FaUsers } from 'react-icons/fa';
import { MdSpaceDashboard, MdViewCarousel } from 'react-icons/md';
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
      if (error) return setUser({authority: Authority.NO_LOGIN});
      return setUser(superAdmin);
    }
    setUser(admin);
  }

  const LoginMenu = () => (
    <S.SideBarItem onClick={() => openModal('adminLogin')}>
      <S.SideBarItemIcon>
        <FaUserAlt size={22} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>로그인</S.SideBarItemContent>
    </S.SideBarItem>
  );

  const AdminMenu = () => (<>
    <S.SideBarItem onClick={() => navigate('/admin/dashboard')}>
      <S.SideBarItemIcon>        
        <MdSpaceDashboard size={26} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>대시보드</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/plan')}>
      <S.SideBarItemIcon>
        <FaThList size={20} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>플랜 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/banner')}>
      <S.SideBarItemIcon>
        <MdViewCarousel size={30} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>배너 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/notice')}>
      <S.SideBarItemIcon>  
        <FaBullhorn size={22} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>공지사항</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => openModal('superAdminLogin')}>
      <S.SideBarItemIcon>  
        <FaUserAlt size={22} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>슈퍼관리자로 전환</S.SideBarItemContent>
    </S.SideBarItem>
  </>);

  const SuperAdminMenu = () => (<>
    <S.SideBarItem onClick={() => navigate('/admin/adminlist')}>
      <S.SideBarItemIcon>
        <FaUserAlt size={22} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>관리자계정 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/notice')}>
      <S.SideBarItemIcon>  
        <FaBullhorn size={22} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>공지사항 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => navigate('/admin/employment')}>
      <S.SideBarItemIcon>
        <FaUsers size={22} color='white' />
      </S.SideBarItemIcon>
      <S.SideBarItemContent>채용 관리</S.SideBarItemContent>
    </S.SideBarItem>
    <S.SideBarItem onClick={() => openModal('adminLogin')}>
      <S.SideBarItemIcon>
        <FaUserAlt size={22} color='white' />
      </S.SideBarItemIcon>
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
          user.authority === Authority.ROOT || user.authority === Authority.ADMIN
          ? `${user.nickname}님 반갑습니다.`
          :'로그인해주세요.'
        }</p>
        <hr />
      </S.SideBarHeader>
      <S.SideBarContentWrap>{
        user.authority === Authority.ADMIN
        ? <AdminMenu />
        : user.authority === Authority.ROOT
        ? <SuperAdminMenu />
        : <LoginMenu />
      }</S.SideBarContentWrap>
      <LoginModal />
    </S.SideBar>
  );
}

export default AdminSideBar;
