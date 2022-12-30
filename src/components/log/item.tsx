import { Log } from '../../types/log.type';
import * as S from "./style";

interface LogItemProps {
  log: Log
}

const LogItem = ({
  log
}: LogItemProps) => (
  <S.Item>
    <S.InfoWrap>
      <span>{log.nickname}님이 {log.message}</span>
      <span>{new Date(log.didAt).toLocaleString()}</span>
    </S.InfoWrap>
  </S.Item>
);

export default LogItem;
