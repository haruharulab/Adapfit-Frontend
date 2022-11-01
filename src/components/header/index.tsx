import * as S from "./style";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <S.Headers>
        <S.LogoWrap></S.LogoWrap>
        <S.MenuWrap>
          <Link to="/planlist">
            <span>플랜목록</span>
          </Link>
          <Link to="/">
            <span>챗봇상담</span>
          </Link>
          <Link to="/">
            <span>채용공고</span>
          </Link>
        </S.MenuWrap>
      </S.Headers>
    </>
  );
}
