import { Contain, Footer_logo, Info, Sns } from "./style";

function Footer() {
  return (
    <Contain>
      <Footer_logo src="/image/Adapfit_logo.svg" />
      <Info>
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
          Copyright 2020. adapfit. All right reserved.
        </p>
      </Info>
      <Sns>
        <img src="/image/instargram_logo.png" />
        <img src="/image/facebook_logo.png" />
        <img src="/image/youtube_logo.png" />
      </Sns>
    </Contain>
  );
}

export default Footer;
