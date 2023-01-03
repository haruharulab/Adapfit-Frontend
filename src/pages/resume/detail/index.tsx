import * as S from "./style";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillFileZip } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { Input } from "../../../components/common/input/style";
import { DetailResumeType, Resume } from "../../../types/resume.type";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { useModal } from "../../../utils/modal";
import { Authority } from "../../../types/user.type";

const ResumeDetail = () => {
  const user = useRecoilValue(userState);
  const { ajax } = useAjax();
  const { openModal } = useModal();
  const [resume, setResume] = useState<DetailResumeType | null>(null);
  const params = useParams();
  const resumeId = Number(params.id);

  const loadResume = async () => {
    const [data, error] = await ajax<DetailResumeType>({
      url: `resume/${resumeId}`,
      method: HttpMethod.GET
    });
    if (error) return;
    setResume(data);
  }

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ADMIN) return openModal('adminLogin');
    loadResume();
  }, [resumeId, user]);

  return (<>{
    resume &&
    <S.Contain>
      <S.Header>{resume.name}님의 지원서</S.Header>
      <h3>채용 정보</h3>
      <Link to={`/recruitment/${resume.recruitment.id}`}>{resume.name}님이 지원한 채용공고 보기</Link>
      <p>직군</p>
      <Input
        value={resume.recruitment.position}
        readOnly
      />
      <p>지원 일시</p>
      <Input
        value={new Date(resume.createdAt).toLocaleString()}
        readOnly
      />
      <h3>지원자 정보</h3>
      <p>이름</p>
      <Input
        value={resume.name}
        readOnly
      />
      <p>이메일</p>
      <Input
        value={resume.email}
        readOnly
      />
      <p>전화번호</p>
      <Input
        value={resume.phoneNumber}
        readOnly
      />
      <h3>제출 서류</h3>
      <p>이력서</p>
      <S.FileLink href={resume.resume} target='_blank' as={resume.resume ? 'a' : 'div'}>
        <AiFillFileZip />
        {resume.resume ? '이력서 보기' : '제출 안함'}
      </S.FileLink>
      <p>포트폴리오</p>
      <S.FileLink href={resume.portFolio} target='_blank' as={resume.portFolio !== 'none' ? 'a' : 'div'}>
        <AiFillFileZip />
        {resume.portFolio !== 'none' ? '포트폴리오 보기' : '제출 안함'}
      </S.FileLink>
      <p>기타 제출파일</p>
      <S.FileLink href={resume.etcFile} target='_blank' as={resume.etcFile ? 'a' : 'div'}>
        <AiFillFileZip />
        {resume.etcFile ? '기타 제출파일 보기' : '제출 안함'}
      </S.FileLink>
    </S.Contain>
  }</>);
}

export default ResumeDetail;
