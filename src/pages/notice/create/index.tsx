import * as S from './style'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import { FormSubmitButton } from '../../../components/common/button/style';
import { Editor } from '@tinymce/tinymce-react';
import { Input } from '../../../components/common/input/style';
import { useNavigate } from 'react-router-dom';

const CreateNotice = () => {
  const user = useRecoilValue(userState);
  const { openModal } = useModal();
  const { ajax } = useAjax();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ADMIN) return openModal('adminLogin');
  }, [user]);

  const createNotice = async () => {
    if (!content) return alert('내용을 입력해주세요');

    const [, error] = await ajax({
      url: 'notice',
      method: HttpMethod.POST,
      payload: {
        title,
        content
      }
    });
    if (error) return;
    navigate('/admin/notice/manage');
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
      <S.Header>공지사항 작성</S.Header>
      <form onSubmit={event => {
        event.preventDefault();
        createNotice();
      }}>
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
        <FormSubmitButton type='submit'>공지사항 작성</FormSubmitButton>
      </form>
    </S.Contain>
  );
}

export default CreateNotice;