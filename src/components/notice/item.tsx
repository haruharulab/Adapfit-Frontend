import { AiFillSetting } from 'react-icons/ai';
import { Link, NavigateFunction } from 'react-router-dom';
import { Notice } from '../../types/notice.type';
import { Authority, UserType } from '../../types/user.type';
import { dateToShortStr } from "../../utils/date";
import { DropdownMenu, DropdownMenuOption } from '../common/dropdownMenu';
import * as S from "./style";

interface NoticeManageItemProps {
  user: UserType,
  notice: Notice,
  navigate: NavigateFunction,
  deleteNotice: (id: number) => void;
}

const NoticeItem = ({
  user,
  notice,
  navigate,
  deleteNotice
}: NoticeManageItemProps) => {
  const dropdownMenus: DropdownMenuOption[] = [
    { text: '수정', callback: () => navigate(`/admin/notice/edit/${notice.id}`) },
    { text: '삭제', callback: () => deleteNotice(notice.id) }
  ];

  return (
    <S.Item as='div'>
      <S.InfoWrap>
        <span><Link to={`/admin/notice/${notice.id}`}>{notice.title}</Link></span>
        <span>{dateToShortStr(new Date(notice.createdAt))}</span>
      </S.InfoWrap>
      {
        user.authority === Authority.ADAPFIT_ADMIN &&
        <DropdownMenu title={<AiFillSetting size={22} color='white' />} menus={dropdownMenus} />
      }
    </S.Item>
  );
}

export default NoticeItem;
