import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
const Modify = () => {
  const { userId } = useParams();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [centerInfo, setCenterInfo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const data = {
      id: "afdsfd",
      password: "dak",
      email: "dafjk@gmail.com",
      centerInfo: "dfak",
      phoneNumber: "21301032",
      nickname: "afds",
    };
    setId(data.id);
    setPassword(data.password);
    setEmail(data.email);
    setCenterInfo(data.centerInfo);
    setPhoneNumber(data.phoneNumber);
    setNickname(data.nickname);
  }, []);
  const Submit = async () => {};
  return (
    <S.Contain>
      <S.Form>
        <S.Title>수정</S.Title>
        <S.InputWrap>
          <S.Text>아이디</S.Text>
          <S.Input defaultValue={id} onChange={(e) => setId(e.target.value)} />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>비밀번호</S.Text>
          <S.Input
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>이메일</S.Text>
          <S.Input
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>닉네임</S.Text>
          <S.Input
            defaultValue={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>전화번호</S.Text>
          <S.Input
            defaultValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>소속</S.Text>
          <S.Input
            defaultValue={centerInfo}
            onChange={(e) => setCenterInfo(e.target.value)}
          />
        </S.InputWrap>
        <S.ModifyButton>수정</S.ModifyButton>
      </S.Form>
    </S.Contain>
  );
};

export default Modify;
