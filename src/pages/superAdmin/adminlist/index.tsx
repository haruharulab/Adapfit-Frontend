import * as S from "./style";
import { useEffect, useState } from "react";
import { Admin } from "../../../types/user.type";
import { getUser } from "../../../apis/super.api";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { AdminItem } from "../../../components/adminlist";

export default function AdminList() {
  const { ajax } = useAjax();
  const [adminList, setAdminList] = useState<Admin[]>([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await ajax<Admin[]>({
        url: "super/all",
        method: HttpMethod.GET,
      });
      if (error) return;
      setAdminList(data);
    })();
  }, []);

  const deleteAdmin = async (id: string) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const [, error] = await ajax({
      url: `super/${id}`,
      method: HttpMethod.DELETE,
    });
    if (error) return;
    (async () => {
      const [data, error] = await ajax<Admin[]>({
        url: "super/all",
        method: HttpMethod.GET,
      });
      if (error) return;
      setAdminList(data);
    })();
  };
  return (
    <S.Contain>
      <h2>관리자 정보 조회</h2>
      <S.Header>
        <S.Search>&nbsp;&nbsp;&nbsp;&nbsp; 관리자검색</S.Search>
        <span>이메일</span>
        <span>소속</span>
        <span>연락처</span>
      </S.Header>
      {adminList.map((admin) => (
        <AdminItem {...admin} deleteAdmin={deleteAdmin} />
      ))}
    </S.Contain>
  );
}
