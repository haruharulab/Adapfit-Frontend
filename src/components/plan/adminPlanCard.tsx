import { deletePlan } from "../../apis/plan.api";
import { Plan } from "../../types/plan.type";
import * as S from "./style";

interface PlanCardProps {
  plan: Plan,
  removeMode: boolean,
  deletePlan: (id: number) => void
}

export default function ManagePlanCard({
    plan,
    removeMode,
    deletePlan
}: PlanCardProps) {
  return (
    <S.ManageCardContain>
      <S.Img img={plan.thumbnail} />
      <S.Content>{plan.title}</S.Content>
      {!removeMode && <S.Edit to={`/admin/plan/${plan.planId}`}>플랜 수정</S.Edit>}
      {removeMode && <S.Remove onClick={() => deletePlan(plan.planId)}>플랜 삭제</S.Remove>}
    </S.ManageCardContain>
  );
}
