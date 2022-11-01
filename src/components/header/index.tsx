import * as S from "./style";

export default function Header() {
  return (
    <>
      <S.Headers>
        <S.LogoWrap></S.LogoWrap>
        <S.MenuWrap>
          <span>플랜목록</span>
          <span>챗봇상담</span>
          <span>채용공고</span>
        </S.MenuWrap>
      </S.Headers>
    </>
  );
}
