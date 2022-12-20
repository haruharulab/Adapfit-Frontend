import * as S from "./style";
import { BsBellFill } from "react-icons/bs";
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
        <BsBellFill size={20} />
      </S.Header>
      {sampleData.map((data) => {
        return (
          <S.NoticeConatiner>
            <a href={`noticedetail`} style={{ color: "black" }}>
              <S.Writer>{data.title}</S.Writer>{" "}
            </a>
            <S.WriterAndDate>
              <S.StyledSpan>{data.writer}</S.StyledSpan>
              <S.StyledSpan>{data.date}</S.StyledSpan>
            </S.WriterAndDate>
          </S.NoticeConatiner>
        );
      })}
    </S.Contain>
  );
}
