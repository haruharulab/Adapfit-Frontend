import * as S from "./style";
import { useEffect, useState } from "react";
import { Admin } from "../../../types/user.type";
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
      console.log(data);
    })();
  }, []);

  const deleteAdmin = async (id: string) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const [, deleteError] = await ajax({
      url: `super/${id}`,
      method: HttpMethod.DELETE,
    });
    if (deleteError) return;

    const [data, loadError] = await ajax<Admin[]>({
      url: "super/all",
      method: HttpMethod.GET,
    });
    if (loadError) return;
    setAdminList(data);
  };

  return (
    <S.Contain>
      <h2>관리자 정보 조회</h2>
      <S.Header>
        <S.Search>관리자검색</S.Search>
        <div>
            
        </div>
      </S.Header>
      {adminList.map(admin => (
        <AdminItem {...admin} deleteAdmin={deleteAdmin} />
      ))}
    </S.Contain>
  );
}
