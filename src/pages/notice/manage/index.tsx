import * as S from './style'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import NoticeManageItem from '../../../components/notice/manageItem';
import { useNavigate } from 'react-router-dom';
import { Notice } from '../../../types/notice.type';
import NoticeInfoHeader from '../../../components/notice/header';

const ManageNotice = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();
  const {ajax} = useAjax();
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState<Notice[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT && user.authority !== Authority.ADMIN) return openModal('superAdminLogin');
    getNoticeList();
  }, [user]);

  const getNoticeList = async () => {
    const [data, error] = await ajax<{
      count: number,
      data: Notice[]
    }>({
      url: 'notice',
      method: HttpMethod.GET
    });
    if (error) return;
    setNoticeList(data.data);
  }
  
  return (
    <S.Contain>
      <S.Header>공지사항 관리</S.Header>
      <S.MenuWrap>
        <S.CreateButton to='/admin/notice/create'>
          공지사항 작성
        </S.CreateButton>
      </S.MenuWrap>
      <S.ItemWrap>
        <NoticeInfoHeader />
        <hr />
        {noticeList.map(notice => (
          <NoticeManageItem
            notice={notice}
            navigate={navigate}
            deleteNotice={() => {}}
          />
        ))}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default ManageNotice;