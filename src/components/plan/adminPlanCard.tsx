import { deletePlan } from "../../apis/plan.api";
import { Plan } from "../../types/plan.type";
import * as S from "./style";

interface PlanCardProps {
  plan: Plan;
}

export default function RemovePlanCard({ plan }: PlanCardProps) {
  return (
    <S.RemoveCardContain>
      <S.Img img={plan.thumbnail} />
      <S.Content>{plan.title}</S.Content>
      <S.Remove>
        <div
          onClick={() => {
            (async () => {
              await deletePlan(plan.planId);
              alert(plan.planId);
            })();
          }}
        >
          삭제
        </div>
      </S.Remove>
    </S.RemoveCardContain>
  );
}
