import * as S from './style'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../store/user.store";
import { Authority } from "../../../../types/user.type";
import { HttpMethod, useAjax } from "../../../../utils/ajax";
import { useModal } from "../../../../utils/modal";
import { useNavigate } from 'react-router-dom';
import { Notice } from '../../../../types/notice.type';
import NoticeInfoHeader from '../../../../components/notice/header';
import NoticeItem from '../../../../components/notice/item';

const NoticePage = () => {
  const user = useRecoilValue(userState);
  const { openModal } = useModal();
  const { ajax } = useAjax();
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState<Notice[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ADMIN) return openModal('adminLogin');
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
      <S.Header>공지사항</S.Header>
      <S.MenuWrap>
        <S.CreateButton to='/admin/notice/create'>
          공지사항 작성
        </S.CreateButton>
      </S.MenuWrap>
      <S.ItemWrap>
        <NoticeInfoHeader />
        <hr />
        {noticeList.map(notice => (
          <NoticeItem
            notice={notice}
            navigate={navigate}
            deleteNotice={deleteNotice}
          />
        ))}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default NoticePage;