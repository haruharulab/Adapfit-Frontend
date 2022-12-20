import * as S from "./style";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function NoticeDetail() {
  const { id } = useParams();

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
