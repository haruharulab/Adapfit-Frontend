import { useEffect, useState } from "react";
import { Plan } from "../../../types/plan.type";
import { getPlan } from "../../../apis/plan.api";
import { useParams } from "react-router-dom";
import * as S from "./style";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { escapeAttrValue, FilterXSS } from "xss";
import { AiOutlineLink } from "react-icons/ai";

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

  const copyUrl = () => {
    navigator.clipboard.writeText(document.URL);
    alert('클립보드에 복사되었습니다');
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
          <div dangerouslySetInnerHTML={{ __html: xssFilter.process(plan.content) }}></div>
          <hr />
        </S.PlanContent>
        <S.PlanBottomWrap>
          <S.PlanShareWrap>
            공유하기
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.URL)}`} target='_blank'>
              <BsFacebook size={20} />
            </a>
            <a href={`https://twitter.com/share?url=${encodeURIComponent(document.URL)}`} target='_blank'>
              <BsLinkedin size={20} />
            </a>
            <a href={`https://twitter.com/share?url=${encodeURIComponent(document.URL)}`} target='_blank'>
              <BsTwitter size={20} />
            </a>
            <AiOutlineLink size={24} onClick={copyUrl} />
          </S.PlanShareWrap>
          <S.PlanConsultLink href="https://pf.kakao.com/_xisniK/chat" target='_blank'>상담하러 가기</S.PlanConsultLink>
        </S.PlanBottomWrap>
      </S.Wrap>
    )
  );
};

export default PlanDetail;
