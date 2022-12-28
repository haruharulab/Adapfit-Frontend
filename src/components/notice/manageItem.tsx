import { AiFillSetting } from "react-icons/ai";
import { NavigateFunction } from 'react-router-dom';
import { Notice } from '../../types/notice.type';
import { dateToShortStr } from '../../utils/date';
import { DropdownMenu, DropdownMenuOption } from "../common/dropdownMenu";
import * as S from "./style";

interface NoticeManageItemProps {
  notice: Notice,
  navigate: NavigateFunction,
  deleteNotice: (id: number) => void;
}

const NoticeManageItem = ({
  notice,
  navigate,
  deleteNotice
}: NoticeManageItemProps) => {
  const dropdownMenus: DropdownMenuOption[] = [
    {text: '수정', callback: () => navigate(`/admin/notice/manage/${notice.id}`)},
    {text: '삭제', callback: () => deleteNotice(notice.id)}
  ];

  return (
    <S.Item as='div'>
      <S.InfoWrap>
        <span>{notice.title}</span>
        <span>{dateToShortStr(new Date(notice.createdAt))}</span>
      </S.InfoWrap>
      <DropdownMenu title={<AiFillSetting size={22} color='white' />} menus={dropdownMenus} />
    </S.Item>
  );
}

export default NoticeManageItem;
