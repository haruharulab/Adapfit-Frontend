import * as S from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { FiArrowLeft } from "react-icons/fi";
import { Recruitment } from "../../../types/recruitment.type";
import { AccentButtonLink } from "../../../components/common/button/style";
import { escapeAttrValue, FilterXSS } from "xss";

const xssFilter = new FilterXSS({
  onIgnoreTagAttr: (tag, name, value) => {
      if (name === 'style') return `${name}="${escapeAttrValue(value)}"`;
  },
  onIgnoreTag: (tag, html) => {
      if (tag === 'iframe') return html;
  }
});

const RecruitmentDetail = () => {
  const {ajax} = useAjax();
  const params = useParams();
  const recruitmentId = Number(params.id);
  const [recruitment, setRecruitment] = useState<Recruitment | null>(null);
  
  useEffect(() => {
    getRecruitment();
  }, [recruitmentId]);

  const getRecruitment = async () => {
    const [data, error] = await ajax<Recruitment>({
      url: `recruitment/${recruitmentId}`,
      method: HttpMethod.GET,
      noToken: true
    });
    if (error) return;
    setRecruitment(data);
  }

  return (<>{
    recruitment &&
    <S.RecruitmentWrap>
      <S.NavigateHeader to='/recruitment'>
        <FiArrowLeft />
        채용공고
      </S.NavigateHeader>
      <S.Header>
        <h2>{recruitment.title}</h2>
        <div>
          <p>
            <span>직군: </span>{recruitment.position}
          </p>
          <p>
            <span>경력 구분: </span>{recruitment.career}
          </p>
          <p>
            <span>채용 패턴: </span>{recruitment.employmentPattern === 'PERMANENT_EMPLOYEE'? '정규직': '비정규직'}
          </p>
        </div>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{__html: xssFilter.process(recruitment.content)}} />
      <AccentButtonLink to={`/resume/${recruitment.id}`}>지원하기</AccentButtonLink>
    </S.RecruitmentWrap>
  }</>);
}

export default RecruitmentDetail;
