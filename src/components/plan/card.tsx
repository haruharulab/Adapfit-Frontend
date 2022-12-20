import { Plan } from "../../types/plan.type";
import * as S from "./style";

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <S.CardContain to={`/plan/${plan.planId}`}>
      <S.Img img={plan.thumbnail} />
      <S.Content>{plan.title}</S.Content>
    </S.CardContain>
  );
}
