import * as S from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { id } = useParams();
  return (
    <S.Contain>
      <h1>피트니스 센터 매니저</h1>
      <span>주요 업무</span>
      <S.InfoBox>
        <ul>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
        </ul>
      </S.InfoBox>
      <span>지원 자격</span>
      <S.InfoBox>
        <ul>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
        </ul>
      </S.InfoBox>
      <span>채용 과정</span>
      <S.InfoBox>
        <ul>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
          <li>피트니스 센터 매니저 일을 열심히 하기</li>
        </ul>
      </S.InfoBox>
      <a href={`/resume/${id}`}>
        <S.SubmitBtn>지원하기</S.SubmitBtn>
      </a>
    </S.Contain>
  );
}
