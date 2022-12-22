import { Plan } from "../../../types/plan.type";
import * as S from "./planCardStyle";

interface HomePlanCardProps {
    plan: Plan
}

const HomePlanCard = ({plan}: HomePlanCardProps) => (
  <S.HomePlanCardLink to={`/plan/${plan.planId}`}>
    <div>
      <img src={plan.thumbnail} alt="plan card" />
      <p>{plan.title}</p>
      <span></span>
    </div>
  </S.HomePlanCardLink>
)

export default HomePlanCard;