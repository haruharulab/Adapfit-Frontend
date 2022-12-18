import * as S from "./style";
import { NavLink } from "react-router-dom";

export const Header = () => (
  <S.Header>
    <S.HeaderContainer>
      <S.LogoWrap to='/'>
        <S.Logo alt="logo" src="/image/Adapfit_logo.svg" />
      </S.LogoWrap>
      <S.Nav>
        <NavLink to="/plan">플랜목록</NavLink>
        <NavLink to="/counsel">챗봇상담</NavLink>
        <S.AccentLink to="/employment">채용공고</S.AccentLink>
      </S.Nav>
    </S.HeaderContainer>
  </S.Header>
);
