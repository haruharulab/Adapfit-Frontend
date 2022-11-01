import * as S from "./style";

export default function Caroshell() {
  return (
    <>
      <S.Caros>
        <img src="/photo/ca1.png" />
      </S.Caros>
      <S.PlanStatus>
        <p className="Mainplan">플랜설명</p>
        <p>플랜보조설명 입니다.</p>
      </S.PlanStatus>
    </>
  );
}
