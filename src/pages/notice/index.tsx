import * as S from "./style";
const sampleData = [
  {
    title: "titiletil",
    writer: "응아니야",
    date: "1월 1일",
  },
  {
    title: "titiletil",
    writer: "응아니야",
    date: "1월 1일",
  },
  {
    title: "titiletil",
    writer: "응아니야",
    date: "1월 1일",
  },
  {
    title: "titiletil",
    writer: "응아니야",
    date: "1월 1일",
  },
  {
    title: "titiletil",
    writer: "응아니야",
    date: "1월 1일",
  },
  {
    title: "titiletil",
    writer: "응아니야",
    date: "1월 1일",
  },
];
export default function Notice() {
  return (
    <S.Contain>
      <S.Header>
        <span>공지사항</span>
        <S.Img src="image/ring.png"></S.Img>
      </S.Header>
      {sampleData.map((data) => {
        return (
          <S.NoticeConatiner>
            <S.Title>{data.title}</S.Title>
            <S.WriterAndDate>
              <S.Writer>{data.writer}</S.Writer>
              <S.Date>{data.date}</S.Date>
            </S.WriterAndDate>
          </S.NoticeConatiner>
        );
      })}
    </S.Contain>
  );
}
