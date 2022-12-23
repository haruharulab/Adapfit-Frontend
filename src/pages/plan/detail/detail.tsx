import { useEffect, useState } from "react";
import { Plan } from "../../../types/plan.type";
import { getPlan } from "../../../apis/plan.api";
import { useParams } from "react-router-dom";
import * as S from "./style";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

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
        <S.PlanInfoImage src={plan.thumbnail} />
        <S.PlanInfo>
          <S.PlanCategory>{plan.category.name}</S.PlanCategory>
          <S.PlanTitle>{plan.title}</S.PlanTitle>
          <S.PlanSubTitle>{plan.subTitle}</S.PlanSubTitle>
          <hr />
        </S.PlanInfo>
        <S.PlanContent>
          <div dangerouslySetInnerHTML={{__html: plan.content}}></div>
          <hr />
        </S.PlanContent>
        <S.PlanBottomWrap>
          <S.PlanShareWrap>
            <BsFacebook />
            <BsLinkedin />
            <BsTwitter />
          </S.PlanShareWrap>
          <S.PlanConsultButton onClick={startConsult}>상담하러 가기</S.PlanConsultButton>
        </S.PlanBottomWrap>
      </S.Wrap>
    )
  );
};

export default PlanDetail;
