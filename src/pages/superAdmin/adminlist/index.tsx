import * as S from "./style";
import { useEffect, useState } from "react";
import AdminItem from "../../../components/adminlist";
import { Admin } from "../../../types/user.type";
import { getUser } from "../../../apis/super.api";

export default function AdminList() {
  const [data, setData] = useState<Admin[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getUser();
      setData(data);
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
      {data.map((admin: Admin) => {
        return <AdminItem {...admin} />;
      })}
    </S.Contain>
  );
}
