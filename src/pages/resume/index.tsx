import * as S from "./style";
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { AiFillFileZip } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { Input } from "../../components/common/input/style";

const Resume = () => {
  const {ajax} = useAjax();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [etcFile, setEtcFile] = useState<File | null>(null);
  const [isFilled, setisFilled] = useState(false);
  const params = useParams();
  const recruitmentId = Number(params.id);

  const check = () => {
    if (!name || !email || !phoneNumber || !resumeFile) return false;
    return true;
  };

  useEffect(() => {
    setisFilled(check());
  }, [name, email, phoneNumber, resumeFile]);

  const fileHandler = (event: ChangeEvent<HTMLInputElement>, set: Dispatch<SetStateAction<File | null>>) => {
    const file = event.target.files?.[0]
    if (!file) return;
    set(file);
  }

  const submit = async () => {
    if (!isFilled) {
      alert("전부 입력 해주세요");
      return false;
    }
    const payload = new FormData();
    payload.append('req', new Blob([JSON.stringify({
      recruitmentId,
      name,
      email,
      phoneNumber
    })], {
      type: 'application/json'
    }));
    payload.append("resume", resumeFile ?? new Blob());
    payload.append("portfolio", portfolioFile?? new Blob());
    payload.append("etcFile", etcFile?? new Blob());
    
    const [, error] = await ajax({
      url: 'resume',
      method: HttpMethod.POST,
      payload,
      noToken: true
    });
    if (error) return;

    alert('지원서 제출에 성공하였습니다.');
    navigate('/recruitment');
  };

  return (
    <S.Contain
      onSubmit={event => {
        event.preventDefault();
        submit();
      }}
    >
      <S.Header>지원서 작성</S.Header>
      <h3>지원자 정보</h3>
      <p>이름<S.Required>*</S.Required></p>
      <Input
        placeholder='이름을 입력해주세요'
        onChange={(e) => setName(e.target.value)}
        required
      />
      <p>이메일<S.Required>*</S.Required></p>
      <Input
        placeholder='이메일을 입력해주세요'
        onChange={(e) => setEmail(e.target.value)}
        required
        type='email'
      />
      <p>전화번호<S.Required>*</S.Required></p>
      <Input
        placeholder='전화번호를 입력해주세요'
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <h3>제출 서류</h3>
      <p>이력서<S.Required>*</S.Required></p>
      <S.FileInput as='label' htmlFor='resume-input'>
        <AiFillFileZip />
        <span>{resumeFile? '이력서 첨부 완료' : '이력서를 첨부해주세요'}</span>
        <input
          type='file'
          id='resume-input'
          onChange={event => fileHandler(event, setResumeFile)}
          style={{display: 'none'}}
        />
      </S.FileInput>
      <p>포트폴리오</p>
      <S.FileInput as='label' htmlFor='portfolio-input'>
        <AiFillFileZip />
        {portfolioFile? '포트폴리오 첨부 완료': '포트폴리오가 있으면 첨부해주세요'}
        <input
          type='file'
          id='portfolio-input'
          onChange={event => fileHandler(event, setPortfolioFile)}
          style={{display: 'none'}}
        />
      </S.FileInput>
      <p>기타</p>
      <S.FileInput as='label' htmlFor='etc-input'>
        <AiFillFileZip />
        {etcFile? '기타 제출파일 첨부 완료': '기타 제출파일이 있으면 첨부해주세요'}
        <input
          type='file'
          id='etc-input'
          onChange={event => fileHandler(event, setEtcFile)}
          style={{display: 'none'}}
        />
      </S.FileInput>
      <S.SubmitBtn isFilled={isFilled} type='submit'>제출하기</S.SubmitBtn>
    </S.Contain>
  );
}

export default Resume;
