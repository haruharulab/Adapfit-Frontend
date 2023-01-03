import { useEffect, useState } from "react";
import { Plan } from "../../../types/plan.type";
import { getPlan } from "../../../apis/plan.api";
import { useParams } from "react-router-dom";
import * as S from "./style";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { escapeAttrValue, FilterXSS } from "xss";

const xssFilter = new FilterXSS({
  onIgnoreTagAttr: (tag, name, value) => {
      if (name === 'style') return `${name}="${escapeAttrValue(value)}"`;
  },
  onIgnoreTag: (tag, html) => {
      if (tag === 'iframe') return html;
  }
});

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
        <S.PlanInfoImage src={plan.thumbnail} />
        <S.PlanInfo>
          <S.PlanCategory>{plan.category.name}</S.PlanCategory>
          <S.PlanTitle>{plan.title}</S.PlanTitle>
          <S.PlanSubTitle>{plan.subTitle}</S.PlanSubTitle>
          <hr />
        </S.PlanInfo>
        <S.PlanContent>
          <div dangerouslySetInnerHTML={{__html: xssFilter.process(plan.content)}}></div>
          <hr />
        </S.PlanContent>
        <S.PlanBottomWrap>
          <S.PlanShareWrap>
            <BsFacebook />
            <BsLinkedin />
            <BsTwitter />
          </S.PlanShareWrap>
          <S.PlanConsultLink href="https://pf.kakao.com/_xisniK/chat" target='_blank'>상담하러 가기</S.PlanConsultLink>
        </S.PlanBottomWrap>
      </S.Wrap>
    )
  );
};

export default PlanDetail;
