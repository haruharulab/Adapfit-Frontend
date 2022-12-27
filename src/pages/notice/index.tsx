import * as S from "./style";
import { useEffect, useState } from "react";
import { Notice } from "../../types/notice.type";
import { HttpMethod, useAjax } from "../../utils/ajax";
import NoticeItem from "../../components/notice/item";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/user.store";
import { Authority } from "../../types/user.type";
import { useModal } from "../../utils/modal";

const NoticeList = () => {
  const user = useRecoilValue(userState);
  const {ajax} = useAjax();
  const {openModal} = useModal();
  const [noticeList, setNoticeList] = useState<Notice[]>([]);


  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT && user.authority !== Authority.ADMIN) return openModal('adminLogin');
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
      <S.Header>공지사항</S.Header>
      <S.ItemWrap>
        {noticeList.map(notice => <NoticeItem notice={notice} />)}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default NoticeList;
