import * as S from "./style";
import { BsBellFill } from "react-icons/bs";
const sampleData = [
  {
    title: "제목입니다11",
    writer: "응아니야",
    date: "1월 1일",
  },
  {
    title: "공지사항입니다.",
    writer: "응아니야",
    date: "2월 13일",
  },
  {
    title: "제목입니다11",
    writer: "응아니야",
    date: "7월 25일",
  },
  {
    title: "공지사항입니다",
    writer: "응아니야",
    date: "2월 1일",
  },
  {
    title: "제목입니다11",
    writer: "응아니야",
    date: "12월 1일",
  },
  {
    title: "공지사항입니다",
    writer: "응아니야",
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
            <S.Writer>{data.title}</S.Writer>
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
