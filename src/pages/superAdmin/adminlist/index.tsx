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

  return (
    <S.Contain>
      <h2>지금 채용 중인 포지션이에요!</h2>
      <S.Header>
        <S.Search>&nbsp;&nbsp;&nbsp;&nbsp; 관리자검색</S.Search>
        <span>이메일</span>
        <span>소속</span>
        <span>연락처</span>
      </S.Header>
      {adminList.map((admin) => (
        <AdminItem {...admin} />
      ))}
    </S.Contain>
  );
}
