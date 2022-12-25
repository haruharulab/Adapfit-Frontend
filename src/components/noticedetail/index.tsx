import * as S from "./style";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/user.store";
import { useModal } from "../../utils/modal";
import { useEffect } from "react";
import { Authority } from "../../types/user.type";

const NoticeDetail = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();
  const { id } = useParams();
  
  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT && user.authority !== Authority.ADMIN) return openModal('adminLogin');
  }, [user]);

  return (
    <S.Contain>
      <a href={`notice`} style={{ color: "black" }}>
        <S.Arrow size={30} />
      </a>
      <br></br>
      <h1>8월 20일 홈페이지 업데이트 공고</h1>
      <S.SubTitle>
        <div>2022년 8월 13일</div>
        <div>매니저</div>
      </S.SubTitle>
      <span>내용</span>
      <S.InfoBox>
        <ul>
          <li>8월 20일부터 홈페이지 양식이 바뀔 예정입니다.</li>
          <li>8월 20일부터 홈페이지 양식이 바뀔 예정입니다.</li>
          <li>8월 20일부터 홈페이지 양식이 바뀔 예정입니다.</li>
        </ul>
      </S.InfoBox>
    </S.Contain>
  );
}

export default NoticeDetail;
