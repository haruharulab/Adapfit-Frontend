import { ChangeEvent, useEffect, useState } from "react";
import { PlanCategory } from "../../../types/plan.type";
import { getPlanCategoryList } from "../../../apis/plan.api";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { DropdownMenu } from "../../../components/common/dropdownMenu";

const CreatePlan = () => {
  const navigate = useNavigate();
  const {ajax} = useAjax();
  const [planCategoryList, setPlanCategoryList] = useState<PlanCategory[]>([]);
  const [planTitle, setPlanTitle] = useState<string>('');
  const [planContent, setPlanContent] = useState<string>('');
  const [planCategory, setPlanCategory] = useState<PlanCategory>({
    categoryId: 0,
    name: '카테고리 선택'
  });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [imageList, setImageList] = useState<(File)[]>([]);

  useEffect(() => {
    (async () => setPlanCategoryList(await getPlanCategoryList()))();
  }, []);

  const updatePlan = async () => {
    if (!thumbnailFile) return alert('썸네일 이미지를 등록해주세요');
    if (!planCategory.categoryId) return alert('플랜 카테고리를 선택해주세요');
    if (imageList.length < 1) return alert('플랜 이미지는 1개 이상이여야 합니다');

    const payload = new FormData();
    payload.append('req', new Blob([JSON.stringify({
      title: planTitle,
      content: planContent,
      categoryId: planCategory.categoryId
    })], {
      type: 'application/json'
    }));
    payload.append('thumbnail', thumbnailFile);
    imageList.forEach(image => payload.append('images', image));

    const [, error] = await ajax({
      url: 'plan/',
      method: HttpMethod.POST,
      payload
    });
    if (error) return;
    navigate('/admin/plan');
  }

  const thumbnailInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return;
    setThumbnailFile(file);
  }

  const imageEditInputHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageList(prev => [
      ...prev.slice(0, i),
      file,
      ...prev.slice(i + 1)
    ]);
  }

  const imageAddInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return;

    setImageList(prev => [
      ...prev,
      file
    ]);
  }

  return (
    
    <S.Wrap>
      <S.PlanInfoImageWrap>
        {thumbnailFile && <>
          <S.PlanInfoImage src={URL.createObjectURL(thumbnailFile)} />
          <S.EditPlanInfoImage htmlFor='thumbnail_upload'>썸네일 수정</S.EditPlanInfoImage>
        </>}
        {!thumbnailFile && <S.AddPlanInfoImage htmlFor='thumbnail_upload'>썸네일 넣기</S.AddPlanInfoImage>}
        <input
          type='file'
          id='thumbnail_upload'
          onChange={e => thumbnailInputHandler(e)}
          style={{display: 'none'}}
        />
      </S.PlanInfoImageWrap>
      <S.PlanInfo onSubmit={e => {
        e.preventDefault();
        updatePlan();
      }}>
        <DropdownMenu
          title={planCategory.name}
          mark={true}
          menus={[
            ...planCategoryList.map(category => ({
              text: category.name,
              callback() {
                setPlanCategory(category);
              }
            }))
          ]}
        />
        <S.PlanTitleInput
          placeholder='플랜 제목 입력'
          onChange={(e) => setPlanTitle(e.target.value)}
          value={planTitle}
          required
        />
        <S.PlanContentTextArea
          as='textarea'
          placeholder='플랜 정보 입력'
          onChange={(e) => setPlanContent(e.target.value)}
          value={planContent}
          required
        />
        <S.CreatePlanButton type="submit">플랜 만들기</S.CreatePlanButton>
        <hr />
      </S.PlanInfo>
      <S.PlanImageList>
        {imageList.map((file, i) => (
          <S.PlanImageItem>
            <img src={URL.createObjectURL(file)} alt="플랜 설명 이미지" />
            <S.EditPlanInfoImage htmlFor={`plan_image_upload_${i}`}>이미지 수정</S.EditPlanInfoImage>
            <input
              type='file'
              id={`plan_image_upload_${i}`}
              onChange={e => imageEditInputHandler(e, i)}
              style={{display: 'none'}}
            />
          </S.PlanImageItem>
        ))}
        <S.AddPlanImage htmlFor='plan_image_upload'>
          이미지 추가
          <input
            type='file'
            id={`plan_image_upload`}
            onChange={e => imageAddInputHandler(e)}
            style={{display: 'none'}}
          />
        </S.AddPlanImage>
      </S.PlanImageList>
    </S.Wrap>
  )
};

export default CreatePlan;
