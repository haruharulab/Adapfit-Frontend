import * as S from "./style";
import { Link } from "react-router-dom";
const sampleData = [
  {
    title: "8월 20일 홈페이지 업데이트 공고",
    writer: "매니저",
    date: "8월 13일",
  },
  {
    title: "공지사항입니다.",
    writer: "매니저",
    date: "2월 13일",
  },
  {
    title: "8월 20일 홈페이지 업데이트 공고",
    writer: "매니저",
    date: "7월 25일",
  },
  {
    title: "공지사항입니다",
    writer: "매니저",
    date: "2월 1일",
  },
  {
    title: "8월 20일 홈페이지 업데이트 공고",
    writer: "매니저",
    date: "12월 1일",
  },
  {
    title: "공지사항입니다",
    writer: "매니저",
    date: "9월 1일",
  },
];
export default function Notice() {
  return (
    <S.Contain>
      <S.Header>
        <S.Title>공지사항</S.Title>
        <S.Img src="image/ring.png"></S.Img>
      </S.Header>
      {sampleData.map((data) => {
        return (
          <S.NoticeConatiner>
            <S.StyledSpan>{data.title}</S.StyledSpan>
            <S.WriterAndDate>
              <S.Writer>{data.writer}</S.Writer>
              <S.StyledSpan>{data.date}</S.StyledSpan>
            </S.WriterAndDate>
          </S.NoticeConatiner>
        );
      })}
    </S.Contain>
  );
}
