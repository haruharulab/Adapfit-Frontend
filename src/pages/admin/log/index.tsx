import * as S from "./style";
import { useEffect, useState } from "react";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { Authority } from "../../../types/user.type";
import { useModal } from "../../../utils/modal";
import { Log } from "../../../types/log.type";
import LogItem from "../../../components/log/item";
import LogInfoHeader from "../../../components/log/header";

const LogList = () => {
  const user = useRecoilValue(userState);
  const { ajax } = useAjax();
  const { openModal } = useModal();
  const [logList, setLogList] = useState<Log[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
    getLogList();
  }, [user]);

  const getLogList = async () => {
    const [data, error] = await ajax<Log[]>({
      url: 'log',
      method: HttpMethod.GET
    });
    if (error) return;
    setLogList(data);
  }

  return (
    <S.Contain>
      <S.Header>로그목록</S.Header>
      <S.ItemWrap>
        <LogInfoHeader />
        <hr />
        {logList.map(log => <LogItem log={log} />)}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default LogList;
