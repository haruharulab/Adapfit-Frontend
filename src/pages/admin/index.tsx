import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/user.store";
import { Authority } from "../../types/user.type";
import * as S from "./style";
import { useModal } from "../../utils/modal";

const AdminIndex = () => {
  const user = useRecoilValue(userState);
  const {openModal, closeModal} = useModal();
  
  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority === Authority.NO_LOGIN) return openModal('adminLogin');
    closeModal('adminLogin');
    closeModal('superAdminLogin');
  }, [user]);

  return (<>{
    user.authority !== Authority.LOADING &&
    user.authority !== Authority.NO_LOGIN &&
    <S.Contain>
      <S.Logo
        alt="logo"
        src="/image/Adapfit_logo.svg"
      />
      <p>메뉴를 선택해주세요</p>
    </S.Contain>
  }</>);
};

export default AdminIndex;
