import * as S from "./style";
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
    <S.Contain className="bottom-padding">
      <S.Header>
        <span>공지사항</span>
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
