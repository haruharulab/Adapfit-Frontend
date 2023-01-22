import * as S from './style'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../store/user.store";
import { Authority } from "../../../../types/user.type";
import { HttpMethod, useAjax } from "../../../../utils/ajax";
import { useModal } from "../../../../utils/modal";
import NoticeManageItem from '../../../../components/notice/manageItem';
import { useNavigate } from 'react-router-dom';
import { Notice } from '../../../../types/notice.type';
import NoticeInfoHeader from '../../../../components/notice/header';

const ManageNotice = () => {
  const user = useRecoilValue(userState);
  const { openModal } = useModal();
  const { ajax } = useAjax();
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState<Notice[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
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

  const deleteNotice = async (id: number) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const [, error] = await ajax({
      url: `notice/${id}`,
      method: HttpMethod.DELETE,
    });
    if (error) return;

    getNoticeList();
  };

  return (
    <S.Contain>
      <S.Header>공지사항 관리</S.Header>
      <S.ItemWrap>
        <NoticeInfoHeader />
        <hr />
        {noticeList.map(notice => (
          <NoticeManageItem
            notice={notice}
            deleteNotice={deleteNotice}
          />
        ))}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default ManageNotice;