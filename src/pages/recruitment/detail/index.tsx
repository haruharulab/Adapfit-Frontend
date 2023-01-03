import * as S from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { FiArrowLeft } from "react-icons/fi";
import { Recruitment } from "../../../types/recruitment.type";
import { AccentButtonLink } from "../../../components/common/button/style";
import { escapeAttrValue, FilterXSS } from "xss";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

const xssFilter = new FilterXSS({
  onIgnoreTagAttr: (tag, name, value) => {
    if (name === 'style') return `${name}="${escapeAttrValue(value)}"`;
  },
  onIgnoreTag: (tag, html) => {
    if (tag === 'iframe') return html;
  }
});

const RecruitmentDetail = () => {
  const { ajax } = useAjax();
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

  const copyUrl = () => {
    navigator.clipboard.writeText(document.URL);
    alert('클립보드에 복사되었습니다');
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
            <span>채용 패턴: </span>{recruitment.employmentPattern === 'PERMANENT_EMPLOYEE' ? '정규직' : '비정규직'}
          </p>
        </div>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{ __html: xssFilter.process(recruitment.content) }} />
      <S.BottomWrap>
        <S.ShareWrap>
          공유하기
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.URL)}`} target='_blank'>
            <BsFacebook size={20} />
          </a>
          <a href={`https://www.linkedin.com/cws/share?url=${encodeURIComponent(document.URL)}`} target='_blank'>
            <BsLinkedin size={20} />
          </a>
          <a href={`https://twitter.com/share?url=${encodeURIComponent(document.URL)}`} target='_blank'>
            <BsTwitter size={20} />
          </a>
          <AiOutlineLink size={24} onClick={copyUrl} />
        </S.ShareWrap>
        <AccentButtonLink to={`/resume/${recruitment.id}`}>지원하기</AccentButtonLink>
      </S.BottomWrap>
    </S.RecruitmentWrap>
  }</>);
}

export default RecruitmentDetail;
