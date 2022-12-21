import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAdmin, putAdmin } from "../../../apis/super.api";
import { Input } from "../../../components/common/input/style";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import * as S from "./style";
const Modify = () => {
  const { userId } = useParams();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const { ajax } = useAjax();
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const data = {
      id: "afdsfd",
      email: "dafjk@gmail.com",
      phoneNumber: "21301032",
      nickname: "afds",
    };
    const data2 = getAdmin(userId);
    console.log(data2);
    setId(data.id);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setNickname(data.nickname);
  }, []);

  const sub = async () => {
    const [, error] = await ajax({
      url: `super/${userId}`,
      method: HttpMethod.PUT,
      payload: {
        authId: id,
        email: email,
        nickname: nickname,
        phoneNumber: phoneNumber,
      },
    });
    if (error) return;
  };
  return (
    <S.Contain>
      <S.Form>
        <S.Title>수정</S.Title>
        <S.InputWrap>
          <S.Text>아이디</S.Text>
          <Input defaultValue={id} onChange={(e) => setId(e.target.value)} />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>이메일</S.Text>
          <Input
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>닉네임</S.Text>
          <Input
            defaultValue={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>전화번호</S.Text>
          <Input
            defaultValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </S.InputWrap>
        <S.ModifyButton onClick={() => sub()}>수정</S.ModifyButton>
      </S.Form>
    </S.Contain>
  );
};

export default Modify;
