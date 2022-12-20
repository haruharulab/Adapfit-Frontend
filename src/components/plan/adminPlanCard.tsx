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
      {!removeMode && <S.Edit to={`/admin/plan/${plan.planId}`}><div>플랜 수정</div></S.Edit>}
      {removeMode && <S.Remove><div onClick={() => deletePlan(plan.planId)}>플랜 삭제</div></S.Remove>}
    </S.ManageCardContain>
  );
}
