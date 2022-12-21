import * as S from "./style";
import { useEffect, useState } from "react";
import { Admin } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { AdminItem } from "../../../components/adminlist";
import AdminManageModal from "./modal";
import { useModal } from "../../../utils/modal";

export default function AdminList() {
  const {ajax} = useAjax();
  const {openModal} = useModal();
  const [adminList, setAdminList] = useState<Admin[]>([]);

  useEffect(() => {
    loadAdminList();
  }, []);

  const loadAdminList = async () => {
    const [data, error] = await ajax<{
      count: number,
      data: Admin[]
    }>({
      url: "super/all",
      method: HttpMethod.GET,
    });
    if (error) return;
    setAdminList(data.data);
  }

  const deleteAdmin = async (id: string) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const [, deleteError] = await ajax({
      url: `super/${id}`,
      method: HttpMethod.DELETE,
    });
    if (deleteError) return;

    const [data, loadError] = await ajax<Admin[]>({
      url: 'super/all',
      method: HttpMethod.GET,
    });
    if (loadError) return;
    setAdminList(data);
  };

  return (
    <S.Contain>
        <AdminManageModal loadAdminList={loadAdminList} />
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
        <AdminItem {...admin} deleteAdmin={deleteAdmin} />
      ))}
    </S.Contain>
  );
}
