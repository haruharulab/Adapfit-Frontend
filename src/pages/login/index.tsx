import axios from "axios";
import { useState } from "react";
import { LOGIN_URL } from "../../constant/url";
import { TokenRes } from "../../store/user.store";
import { HttpMethod, useAjax } from "../../utils/ajax";
import * as S from "./style";
export default function Login() {
    const {ajax} = useAjax();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const login = async () => {
        const [data, error] = await ajax<TokenRes>({
            url: 'auth/token',
            method: HttpMethod.POST,
            payload: {
                authId: id,
                password
            },
            noToken: true
        });
        if (error) return;
        console.log(data);
    };

    return (
        <S.Contain>
            <S.LoginForm
                onSubmit={e => {
                    e.preventDefault();
                    login();
                }}
            >
                <S.Title>로그인</S.Title>
                <S.InputWrap>
                    <S.Text>아이디</S.Text>
                    <S.Input
                        placeholder="아이디"
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Text>비밀번호</S.Text>
                    <S.Input
                        placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </S.InputWrap>
                <S.LoginButton>로그인</S.LoginButton>
                <S.NoneId to={'/admin/signup'}>계정이 없으신가요?</S.NoneId>
            </S.LoginForm>
        </S.Contain>
    );
}
