import axios from "axios";
import { useState } from "react";
import { LOGIN_URL } from "../../constant/url";
import * as S from "./style";
export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const submit = ({ id, password }: { id: string; password: string }) => {
    let data = {
      id: id,
      password: password,
    };

    let config = {
      method: "post",
      url: LOGIN_URL,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.accessToken.value);
        // setCookie("accessToken", response.data.accessToken.value);
        // setCookie("refreshToken", response.data.refreshToken.value);
        // localStorage.setItem("accessToken", response.data.accessToken.value);
        // localStorage.setItem("refreshToken", response.data.refreshToken.value);
        // setIsLogin(true);
        // router.push("/");
      })
      .catch(function (error) {
        console.log(error);
        console.log(data);
        alert(error.response.data.message);
      });
  };
  return (
    <S.Contain>
      <S.LoginWrapper>
        <S.Title>로그인</S.Title>
        <S.Text>아이디</S.Text>
        <S.Input
          placeholder="아이디를 입력해주세요"
          onChange={(e) => setId(e.target.value)}
        ></S.Input>
        <S.Text>비밀번호</S.Text>
        <S.Input
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => setPassword(e.target.value)}
        ></S.Input>
        <S.NoneId>계정이 없으신가요?</S.NoneId>
        <S.Btn_login onClick={() => {}}>로그인</S.Btn_login>
      </S.LoginWrapper>
    </S.Contain>
  );
}
