import { Notice } from '../../types/notice.type';
import { dateToShortStr } from "../../utils/date";
import * as S from "./style";

interface NoticeItemProps {
  notice: Notice
}

const NoticeItem = ({
  notice
}: NoticeItemProps) => (
  <S.Item to={`/admin/notice/${notice.id}`}>
    <S.InfoWrap>
      <span>{notice.title}</span>
      <span>{dateToShortStr(new Date(notice.createdAt))}</span>
    </S.InfoWrap>
  </S.Item>
);

export default NoticeItem;
