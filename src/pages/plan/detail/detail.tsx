import { useEffect, useState } from "react";
import { Plan } from "../../../types/plan.type";
import { getPlan } from "../../../apis/plan.api";
import { useParams } from "react-router-dom";
import * as S from "./style";

const PlanDetail = () => {
  const param = useParams();
  const planId = Number(param.id);
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (!planId) return;
    (async () => setPlan(await getPlan(planId)))();
  }, [planId]);

  return (
    plan && (
      <S.Wrap>
        <S.PlanInfoWrap>
          <S.PlanInfoImage src={plan.thumbnail} />
          <S.PlanInfo>
            <S.PlanTitle>{plan.title}</S.PlanTitle>
            <S.PlanCategory>{plan.category.name}</S.PlanCategory>
            <S.PlanContent>{plan.content}</S.PlanContent>
            <S.PlanConsultButton>1 대 1 상담하기</S.PlanConsultButton>
          </S.PlanInfo>
        </S.PlanInfoWrap>
        <S.PlanImageList>
          {plan.images.map((item) => (
            <S.PlanImageItem>
              <img src={item.image} alt="플랜 설명 이미지" />
            </S.PlanImageItem>
          ))}
        </S.PlanImageList>
      </S.Wrap>
    )
  );
};

export default PlanDetail;
