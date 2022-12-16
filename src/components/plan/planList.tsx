import { Plan } from "../../types/plan.type";
import PlanCard from "./card";
import * as S from "./style";

interface PlanProps {
    planList: Plan[]
}

export default function PlanList({
    planList
}: PlanProps) {
  return (
    <S.List>{
        planList.map(plan => <PlanCard plan={plan} />)
    }</S.List>
  );
}
