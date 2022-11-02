import React from "react";
import * as S from "./style";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <S.Head>
        <S.Logo alt="logo" src="images/logo.png" />
        <S.Nav>
          <NavLink to="/plan">플랜목록</NavLink>
          <NavLink to="/counsel">챗봇상담</NavLink>
          <NavLink to="/hire">채용공고</NavLink>
        </S.Nav>
      </S.Head>
    </>
  );
};
