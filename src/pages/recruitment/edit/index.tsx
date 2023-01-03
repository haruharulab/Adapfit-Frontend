import * as S from './style'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { DropdownMenu } from "../../../components/common/dropdownMenu";
import { userState } from "../../../store/user.store";
import { Recruitment, RecruitmentInfo } from "../../../types/recruitment.type";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import { FormSubmitButton } from '../../../components/common/button/style';
import { Editor } from '@tinymce/tinymce-react';
import { Input } from '../../../components/common/input/style';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecruitment = () => {
  const param = useParams();
  const recruitmentId = Number(param.id);
  const user = useRecoilValue(userState);
  const { openModal } = useModal();
  const { ajax } = useAjax();
  const navigate = useNavigate();
  const [recruitmentInfo, setRecruitmentInfo] = useState<RecruitmentInfo>({
    positionList: [],
    careerList: [],
    patternList: []
  });
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [position, setPosition] = useState<string>('직군 선택');
  const [career, setCareer] = useState<string>('경력 선택');
  const [employmentPattern, setEmploymentPattern] = useState<string>('채용패턴 선택');

  const getRecruitmentInfo = async () => {
    const [data, error] = await ajax<RecruitmentInfo>({
      url: 'recruitment/info',
      method: HttpMethod.GET,
      noToken: true
    });
    if (error) return;
    setRecruitmentInfo(data);
  }

  const getRecruitment = async () => {
    const [data, error] = await ajax<Recruitment>({
      url: `recruitment/${recruitmentId}`,
      method: HttpMethod.GET,
      noToken: true
    });
    if (error) return;
    setTitle(data.title);
    setContent(data.content);
    setPosition(data.position);
    setCareer(data.career);
    setEmploymentPattern(data.employmentPattern === 'PERMANENT_EMPLOYEE' ? '정규직' : '비정규직');
  }

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ADMIN) return openModal('adminLogin');
    getRecruitmentInfo();
    getRecruitment();
  }, [user, recruitmentId]);

  const updateRecruitment = async () => {
    if (!content) return alert('내용을 입력해주세요');
    if (position === '직군 선택') return alert('직군을 선택해주세요');
    if (career === '경력 선택') return alert('경력을 선택해주세요');
    if (employmentPattern === '채용패턴 선택') return alert('채용패턴을 선택해주세요');

    const [, error] = await ajax({
      url: `recruitment/${recruitmentId}`,
      method: HttpMethod.PUT,
      payload: {
        title,
        content,
        position,
        career,
        employmentPattern: employmentPattern === '정규직' ? 'PERMANENT_EMPLOYEE' : 'NON_REGULAR_WALKER',
        workingArea: '.'
      }
    });
    if (error) return;
    navigate('/admin/recruitment');
  }

  const imagesUploadHandler = async (blobInfo: any): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      let payload = new FormData();
      payload.append('image', blobInfo.blob());

      const [imageUrl, uploadError] = await ajax<string>({
        method: HttpMethod.POST,
        payload,
        url: 'image',
        config: {
          timeout: 0
        },
        errorCallback: (data) => {
          if (!data) return reject({ message: '알 수 없는 에러가 발생하였습니다', remove: true });
          reject({ message: data.message, remove: true });
        }
      });
      if (uploadError) return;
      resolve(imageUrl);
    });
  }

  return (
    <S.Contain>
      <S.Header>채용공고 수정</S.Header>
      <form onSubmit={event => {
        event.preventDefault();
        updateRecruitment();
      }}>
        <S.SelectBoxWrap>
          <DropdownMenu
            title={position}
            menus={
              recruitmentInfo.positionList.map(position => ({
                text: position,
                callback: () => setPosition(position)
              }))
            }
          />
          <DropdownMenu
            title={career}
            menus={
              recruitmentInfo.careerList.map(career => ({
                text: career,
                callback: () => setCareer(career)
              }))
            }
          />
          <DropdownMenu
            title={employmentPattern}
            menus={
              recruitmentInfo.patternList.map(pattern => ({
                text: pattern,
                callback: () => setEmploymentPattern(pattern)
              }))
            }
          />
        </S.SelectBoxWrap>
        <Input
          placeholder='제목'
          onChange={event => setTitle(event.target.value)}
          value={title}
          required
        />
        <Editor
          tinymceScriptSrc={process.env.NODE_ENV === 'development' ? undefined : '/lib/tinymce/tinymce.min.js'}
          init={{
            promotion: false,
            language: 'ko_KR',
            height: '100%',
            menubar: true,
            mobile: {
              menubar: true,
            },
            plugins: [
              'code', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'media', 'table', 'wordcount', 'autoresize'
            ],
            toolbar: 'undo redo codesample | bold italic | alignleft alignright aligncenter alignjustify | emoticon image media | preview code',
            relative_urls: false,
            convert_urls: false,
            images_upload_handler: imagesUploadHandler,
            init_instance_callback: (editor) => {
              const css = document.createElement('style');
              css.innerHTML = 'img{max-width:100%;height:auto}';
              editor.contentDocument.head.appendChild(css);
            }
          }}
          value={content}
          onEditorChange={setContent}
        />
        <FormSubmitButton type='submit'>수정</FormSubmitButton>
      </form>
    </S.Contain>
  );
}

export default EditRecruitment;