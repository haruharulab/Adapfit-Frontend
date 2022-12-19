import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { TokenRes, tokenState, userState } from "../../../store/user.store";
import { SuperAdmin } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import * as S from "./style";

const AdminLogin = () => {
    const {ajax} = useAjax();
    const navigate = useNavigate();
    const setToken = useSetRecoilState(tokenState);
    const setUser = useSetRecoilState(userState);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const [token, tokenError] = await ajax<TokenRes>({
            url: 'auth/token',
            method: HttpMethod.POST,
            payload: {
                authId: id,
                password
            },
            noToken: true
        });
        if (tokenError) return;
        setToken(token);

        const [user, userError] = await ajax<SuperAdmin>({
            url: 'user',
            method: HttpMethod.GET,
            headers: {
                Authorization: token.accessToken
            },
            noToken: true
        });
        if (userError) return;
        setUser(user);
        navigate('/admin');
    };

    return (
        <S.Contain>
            <S.LoginForm
                onSubmit={e => {
                    e.preventDefault();
                    login();
                }}
            >
                <S.Title>관리자 로그인</S.Title>
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
            </S.LoginForm>
        </S.Contain>
    );
}

export default AdminLogin;
