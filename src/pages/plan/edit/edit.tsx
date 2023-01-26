import { ChangeEvent, useEffect, useState } from "react";
import { Plan, PlanCategory } from "../../../types/plan.type";
import { getPlan, getPlanCategoryList } from "../../../apis/plan.api";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { DropdownMenu } from "../../../components/common/dropdownMenu";
import { Editor } from "@tinymce/tinymce-react";
import { Authority } from "../../../types/user.type";
import { useRecoilValue } from "recoil";
import { useModal } from "../../../utils/modal";
import { userState } from "../../../store/user.store";
import { levelCheck } from "../../../utils/levelCheck";

const PlanEdit = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();
  const param = useParams();
  const planId = Number(param.id);
  const navigate = useNavigate();
  const {ajax} = useAjax();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [planCategoryList, setPlanCategoryList] = useState<PlanCategory[]>([]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<PlanCategory>({
    categoryId: 0,
    name: '카테고리 선택'
  });
  
  useEffect(() => {
    if (!levelCheck({requireLevel: 2, user, openModal})) return;

    if (!planId) return;
    (async () => {
      const planInfo = await getPlan(planId);
      setPlan(planInfo);
      setTitle(planInfo.title);
      setSubTitle(planInfo.subTitle);
      setContent(planInfo.content);
      setCategory(planInfo.category);
    })();
    (async () => setPlanCategoryList(await getPlanCategoryList()))();
  }, [user, planId]);

  const updatePlan = async () => {
    if (!category.categoryId) return alert('플랜 카테고리를 선택해주세요');

    const payload = new FormData();
    payload.append('req', new Blob([JSON.stringify({
      title,
      subTitle,
      content,
      categoryId: category.categoryId
    })], {
      type: 'application/json'
    }));

    if (thumbnail) {
      payload.append('thumbnail', thumbnail);
    }

    const [, error] = await ajax({
      url: `plan/${planId}`,
      method: HttpMethod.PUT,
      payload
    });
    if (error) return;
    navigate('/admin/plan');
  }

  const thumbnailInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return;
    setThumbnail(file);
  }

  const imagesUploadHandler = async (blobInfo: any): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      let payload = new FormData();
      payload.append('image', blobInfo.blob());
      
      const [imageUrl, uploadError] = await ajax<string>({
        method: HttpMethod.POST,
        payload,
        url: 'image',
        config:{
            timeout: 0
        },
        errorCallback:(data) => {
            if (!data) return reject({message: '알 수 없는 에러가 발생하였습니다', remove: true});
            reject({message: data.message, remove: true});
        }
      });
      if (uploadError) return;
      resolve(imageUrl);
    });
  }

  return (
    plan && (
      <S.Wrap>
        <S.PlanInfoImageWrap>
          <S.PlanInfoImage src={thumbnail? URL.createObjectURL(thumbnail): plan.thumbnail} />
          <S.EditPlanInfoImage htmlFor='thumbnail_upload'>썸네일 수정</S.EditPlanInfoImage>
          <input
            type='file'
            id='thumbnail_upload'
            onChange={e => thumbnailInputHandler(e)}
            style={{display: 'none'}}
          />
        </S.PlanInfoImageWrap>
        <S.PlanInfo onSubmit={event => {
          event.preventDefault();
          updatePlan();
        }}>
          <DropdownMenu
            title={category.name}
            mark={true}
            menus={[
              ...planCategoryList.map(category => ({
                text: category.name,
                callback() {
                  setCategory(category);
                }
              }))
            ]}
          />
          <S.PlanTitleInput
            placeholder='플랜 제목 입력'
            onChange={event => setTitle(event.target.value)}
            value={title}
            required
          />
          <S.PlanSubTitleInput
            placeholder='플랜 부제목 입력'
            onChange={event => setSubTitle(event.target.value)}
            value={subTitle}
            required
          />
          <S.EditorWrap>
            <Editor
              tinymceScriptSrc={process.env.NODE_ENV === 'development'? undefined: '/lib/tinymce/tinymce.min.js'}
              init={{
                promotion: false,
                language: 'ko_KR',
                height: '100%',
                menubar: true,
                mobile: {
                  menubar: true,
                },
                plugins: [
                  'code','autolink','lists','link','image','charmap','preview','anchor','searchreplace','visualblocks','media','table','wordcount','autoresize'
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
          </S.EditorWrap>
          <S.PlanEditButton type="submit">플랜 수정</S.PlanEditButton>
        </S.PlanInfo>
      </S.Wrap>
    )
  );
};

export default PlanEdit;
