import * as S from "./style";
import { useEffect, useState } from "react";
import { Admin, Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { AdminItem } from "../../../components/adminlist";
import AdminManageModal from "./modal";
import { useModal } from "../../../utils/modal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";

const AdminList = () => {
  const user = useRecoilValue(userState);
  const {ajax} = useAjax();
  const {openModal} = useModal();
  const [selectAdmin, setSelectAdmin] = useState<Admin | null>(null);
  const [adminList, setAdminList] = useState<Admin[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
    loadAdminList();
  }, [user]);

  const loadAdminList = async () => {
    const [data, error] = await ajax<{
      count: number,
      data: Admin[]
    }>({
      url: 'super/all',
      method: HttpMethod.GET,
    });
    if (error) return;
    setAdminList(data.data);
  }

  const deleteAdmin = async (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다!')) return;
    const [, deleteError] = await ajax({
      url: `super/${id}`,
      method: HttpMethod.DELETE
    });
    if (deleteError) return;
    loadAdminList();
  };

  return (<>{
    user.authority === Authority.ROOT &&
    <S.Contain>
      <AdminManageModal selectAdmin={selectAdmin} loadAdminList={loadAdminList} />
      <S.Header>
        <h2>관리자 정보</h2>
        <div>
            <S.Search placeholder='관리자 검색' />
            <S.Create onClick={() => openModal('createAdmin')}>관리자 생성</S.Create>
        </div>
      </S.Header>
      <S.MenuWrap>
          <div>
          <S.Info>아이디</S.Info>
          </div>
      </S.MenuWrap>
      {adminList.map(admin => (
        <AdminItem
          admin={admin}
          deleteAdmin={deleteAdmin}
          setSelectAdmin={setSelectAdmin}
          openModal={openModal}
        />
      ))}
    </S.Contain>
  }</>);
}

export default AdminList;