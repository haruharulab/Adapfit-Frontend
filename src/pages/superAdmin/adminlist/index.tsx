import * as S from "./style";
import { useEffect, useState } from "react";
import { Admin, Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import AdminItem from "../../../components/adminlist";
import AdminManageModal from "./modal";
import { useModal } from "../../../utils/modal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { AccentButton } from "../../../components/common/button/style";
import AdminInfoHeader from "../../../components/adminlist/header";

const AdminList = () => {
  const user = useRecoilValue(userState);
  const { ajax } = useAjax();
  const { openModal } = useModal();
  const [selectAdmin, setSelectAdmin] = useState<Admin | null>(null);
  const [adminList, setAdminList] = useState<Admin[]>([]);
  const [showAdminList, setShowAdminList] = useState<Admin[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
    loadAdminList();
  }, [user]);

  useEffect(() => filterAdminList(), [searchQuery, adminList]);

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

  const filterAdminList = () => {
    if (!searchQuery) return setShowAdminList(adminList);
    const showAdminSet = new Set([
      ...adminList.filter(admin => filterAdminById(admin, searchQuery)),
      ...adminList.filter(admin => filterAdminByNickname(admin, searchQuery))
    ]);
    setShowAdminList(Array.from(showAdminSet));
  }

  const filterAdminById = (admin: Admin, query: string) => admin.authId.includes(query);
  const filterAdminByNickname = (admin: Admin, query: string) => admin.nickname.includes(query);

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
      <S.Header>관리자 관리</S.Header>
      <S.MenuWrap>
        <S.SearchBox onChange={event => setSearchQuery(event.target.value)} placeholder="관리자 ID 또는 닉네임으로 검색" />
        <AccentButton onClick={() => openModal('createAdmin')}>관리자 생성</AccentButton>
      </S.MenuWrap>
      <S.ItemWrap>
        <AdminInfoHeader />
        <hr />
        {showAdminList.map(admin => (
          <AdminItem
            admin={admin}
            deleteAdmin={deleteAdmin}
            setSelectAdmin={setSelectAdmin}
            openModal={openModal}
          />
        ))}
      </S.ItemWrap>
    </S.Contain>
  }</>);
}

export default AdminList;
