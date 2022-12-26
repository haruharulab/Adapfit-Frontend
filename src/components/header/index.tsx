import * as S from "./style";
import { NavLink } from "react-router-dom";

export const Header = () => (
  <S.Header>
    <S.HeaderContainer>
      <S.LogoWrap to='/'>
        <S.Logo alt="logo" src="/image/Adapfit_logo.svg" />
      </S.LogoWrap>
      <S.Nav>
        <NavLink to="/plan">플랜 목록</NavLink>
        <a target='_blank' href="https://pf.kakao.com/_xisniK/chat">상담</a>
        <NavLink to="/recruitment">인재영입</NavLink>
      </S.Nav>
    </S.HeaderContainer>
  </S.Header>
);
