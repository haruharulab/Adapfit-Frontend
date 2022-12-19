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

  const startConsult = () => {
    const channelIO = (window as any).ChannelIO;
    if (!channelIO) return alert('채널톡 서비스를 불러오는데 실패하였습니다');
    if (!plan) return alert('플랜 정보가 없습니다');
    channelIO('openChat', null, `${plan.title} 플랜에 대해 상담하고 싶어요.`);
  }

  return (
    plan && (
      <S.Wrap>
        <S.PlanInfoWrap>
          <S.PlanInfoImageWrap>
            <S.PlanInfoImage src={plan.thumbnail} />
          </S.PlanInfoImageWrap>
          <S.PlanInfo>
            <S.PlanTitle>{plan.title}</S.PlanTitle>
            <S.PlanCategory>{plan.category.name}</S.PlanCategory>
            <S.PlanContent>{plan.content}</S.PlanContent>
            <S.PlanConsultButton onClick={startConsult}>1 대 1 상담하기</S.PlanConsultButton>
          </S.PlanInfo>
        </S.PlanInfoWrap>
        <S.PlanImageList>
          {plan.images.map((item) => (
            <S.PlanImageItem>
              <img src={item.imageUrl} alt="플랜 설명 이미지" />
            </S.PlanImageItem>
          ))}
        </S.PlanImageList>
      </S.Wrap>
    )
  );
};

export default PlanDetail;
