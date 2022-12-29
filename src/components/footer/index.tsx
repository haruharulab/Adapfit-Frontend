import { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { footerHeightState } from "../../store/common.store";
import { AccentButtonLink } from "../common/button/style";
import * as S from "./style";

const Footer = () => {
  const setFooterHeight = useSetRecoilState(footerHeightState);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    updateFooterHeight();
    window.addEventListener('resize', () => updateFooterHeight());
  }, []);

  const updateFooterHeight = () => {
    console.log(ref.current?.clientHeight)
    const height = ref.current?.clientHeight ?? 0;
    if (height < 1) return;
    setFooterHeight(height);
  }

  return (
    <S.Contain ref={ref}>
      <S.ContentWrap>
        <S.Footer_logo src="/image/Adapfit_logo.svg" />
        <S.Info>
          <p>
            <span>주소 부산광역시 금정구 금샘로 361 이엔아이빌딩 3층, 4층</span>
            ㅣ <span>사업자등록번호 465-87-01643</span> ㅣ
            <span>상호명 (주)하루하루움직임연구소</span> ㅣ
            <span>대표 정고운</span>
          </p>
          <p>
            <span>개인정보관리자 정고운</span> ㅣ
            <span>전화번호 051-746-1152</span> ㅣ
            <span>팩스번호 051-746-1156</span> ㅣ
            <span>이메일 help@adapfit.kr</span>
          </p>
          <p className="copyright">
            Copyright 2022. adapfit. All right reserved.
          </p>
        </S.Info>
        <S.Wrap>
          <S.Sns>
            <a target='_blank' href="https://www.instagram.com/adapfit_official/">
              <img src="/image/instargram_logo.png" />
            </a>
            <a target='_blank' href="https://www.facebook.com/adapfit.kr">
              <img src="/image/facebook_logo.png" />
            </a>
            <a target='_blank' href="https://www.youtube.com/@adapfit">
              <img src="/image/youtube_logo.png" />
            </a>
          </S.Sns>
          <AccentButtonLink to='/admin'>관리자 페이지</AccentButtonLink>
        </S.Wrap>
      </S.ContentWrap>
    </S.Contain>
  );
}

export default Footer;
