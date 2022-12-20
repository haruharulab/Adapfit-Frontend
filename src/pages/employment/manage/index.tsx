import * as S from "./style";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
const sampleData = [
  {
    name: "이현준",
    id: "admin1234",
    password: "1234",
  },
  {
    name: "김철수",
    id: "admin1234",
    password: "1234",
  },
  {
    name: "김태현",
    id: "admin1234",
    password: "1234",
  },
  {
    name: "최원용",
    id: "admin1234",
    password: "1234",
  },
  {
    name: "이현준",
    id: "admin1234",
    password: "1234",
  },
];
export default function Notice() {
  return (
    <S.Contain>
      <S.Header>
        <S.Title>관리자 정보 조회</S.Title>
        <div>
          <S.Info>아이디</S.Info>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <S.Info>비밀번호</S.Info>
        </div>
      </S.Header>
      {sampleData.map((data) => {
        return (
          <S.NoticeConatiner>
            <div>
              <BsTrashFill color="#ADADAD" /> &nbsp;
              <RiPencilFill color="#FFA165" /> &nbsp;
              <S.StyledSpan>{data.name}</S.StyledSpan>
            </div>
            <S.WriterAndDate>
              <S.Writer>{data.id}</S.Writer>
              <S.StyledSpan>{data.password}</S.StyledSpan>
            </S.WriterAndDate>
          </S.NoticeConatiner>
        );
      })}
    </S.Contain>
  );
}
