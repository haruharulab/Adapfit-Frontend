import * as S from "./style";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { useModal } from "../../../utils/modal";
import { useEffect, useState } from "react";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { Notice } from "../../../types/notice.type";
import { DateToShortStr } from "../../../utils/date";
import { FiArrowLeft } from "react-icons/fi";

const NoticeDetail = () => {
  const user = useRecoilValue(userState);
  const {ajax} = useAjax();
  const {openModal} = useModal();
  const params = useParams();
  const noticeId = Number(params.id);
  const [notice, setNotice] = useState<Notice | null>(null);
  
  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT && user.authority !== Authority.ADMIN) return openModal('adminLogin');
    getNotice();
  }, [user]);

  const getNotice = async () => {
    const [data, error] = await ajax<Notice>({
      url: `notice/${noticeId}`,
      method: HttpMethod.GET
    });
    if (error) return;
    setNotice(data);
  }

  return (<>{
    notice &&
    <S.NoticeWrap>
      <S.NavigateHeader to='/admin/notice'>
        <FiArrowLeft />
        공지사항
      </S.NavigateHeader>
      <S.Header>
        <h2>{notice.title}</h2>
        <div>
          <span>어댑핏 관리자</span>
          <span>{DateToShortStr(new Date(notice.updatedAt))}</span>
        </div>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{__html: notice.content}} />
    </S.NoticeWrap>
  }</>);
}

export default NoticeDetail;
