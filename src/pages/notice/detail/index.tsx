import * as S from "./style";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { useModal } from "../../../utils/modal";
import { useEffect, useState } from "react";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { Notice } from "../../../types/notice.type";
import { dateToShortStr } from "../../../utils/date";
import { FiArrowLeft } from "react-icons/fi";
import { escapeAttrValue, FilterXSS } from "xss";
import { levelCheck } from "../../../utils/levelCheck";

const xssFilter = new FilterXSS({
  onIgnoreTagAttr: (tag, name, value) => {
      if (name === 'style') return `${name}="${escapeAttrValue(value)}"`;
  },
  onIgnoreTag: (tag, html) => {
      if (tag === 'iframe') return html;
  }
});

const NoticeDetail = () => {
  const user = useRecoilValue(userState);
  const {ajax} = useAjax();
  const {openModal} = useModal();
  const params = useParams();
  const noticeId = Number(params.id);
  const [notice, setNotice] = useState<Notice | null>(null);
  
  useEffect(() => {
    if (!levelCheck({requireLevel: 1, user, openModal})) return;
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
          <span>{dateToShortStr(new Date(notice.updatedAt))}</span>
        </div>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{__html: xssFilter.process(notice.content)}} />
    </S.NoticeWrap>
  }</>);
}

export default NoticeDetail;
