import * as S from "./style";
export function Item(props: any) {
  return (
    <S.Contain>
      <S.Name>{props.title}</S.Name>
      <span>{props.jobGroup}</span>
      <span>{props.career}</span>
      <span className="pattern">{props.workingArea}</span>
    </S.Contain>
  );
}
