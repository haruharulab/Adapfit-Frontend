import * as S from "./style";
export default function Signup() {
  return (
    <S.Contain>
      <S.LoginWrapper>
        <S.Title>회원가입</S.Title>
        <S.Text>아이디</S.Text>
        <S.Input placeholder="아이디를 입력해주세요"></S.Input>
        <S.Text>비밀번호</S.Text>
        <S.Input placeholder="비밀번호를 입력해주세요"></S.Input>
        <S.Text>비밀번호 확인</S.Text>
        <S.Input placeholder="비밀번호를 재확인해주세요"></S.Input>
        <S.Text>이메일</S.Text>
        <S.Input placeholder="이메일 입력해주세요"></S.Input>
        <S.Text>전화번호</S.Text>
        <S.Input placeholder="전화번호를 입력해주세요"></S.Input>
        <S.Btn_login>회원가입</S.Btn_login>
      </S.LoginWrapper>
    </S.Contain>
  );
}
