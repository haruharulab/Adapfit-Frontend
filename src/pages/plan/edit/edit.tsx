import { ChangeEvent, useEffect, useState } from "react";
import { Plan, PlanCategory, PlanImage } from "../../../types/plan.type";
import { getPlan, getPlanCategoryList } from "../../../apis/plan.api";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { HttpMethod, useAjax } from "../../../utils/ajax";

const PlanEdit = () => {
  const param = useParams();
  const planId = Number(param.id);
  const navigate = useNavigate();
  const {ajax} = useAjax();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [planCategoryList, setPlanCategoryList] = useState<PlanCategory[]>([]);
  const [planTitle, setPlanTitle] = useState<string>('');
  const [planContent, setPlanContent] = useState<string>('');
  const [planCategoryId, setPlanCategoryId] = useState<number>(0);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [imageList, setImageList] = useState<(PlanImage)[]>([]);

  useEffect(() => {
    if (!planId) return;
    (async () => {
      const planInfo = await getPlan(planId);
      setPlan(planInfo);
      setPlanTitle(planInfo.title);
      setPlanContent(planInfo.content);
      setPlanCategoryId(planInfo.category.categoryId);
      setImageList(planInfo.images);
    })();
    (async () => setPlanCategoryList(await getPlanCategoryList()))();
  }, [planId]);

  const updatePlan = async () => {
    const payload = new FormData();
    payload.append('req', new Blob([JSON.stringify({
      title: planTitle,
      content: planContent,
      categoryId: planCategoryId
    })], {
      type: 'application/json'
    }));

    if (thumbnailFile) {
      payload.append('thumbnail', thumbnailFile);
    }
    imageList.map(image => editImage(image))
      .forEach(image => {
        if (!image) return;
        payload.append('images', image);
      });

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
    setThumbnailFile(file);
  }

  const imageEditInputHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const planImage = imageList[i];
    if (!('imageId' in planImage)) return;
    const imageId = planImage.imageId;
    const file = e.target.files?.[0]
    if (!file) return;

    setImageList(prev => [
      ...prev.slice(0, i),
      {
        imageFile: file,
        imageId
      },
      ...prev.slice(i + 1)
    ]);
  }

  const editImage = (image: PlanImage) => {
    if (!image.imageFile || !image.imageId) return;
    const fileName = image.imageFile?.name;
    const fileExt = fileName?.split('.')[fileName?.split('.').length - 1];
    return new File([image.imageFile], `${image.imageId}.${fileExt}`, {
      type: image.imageFile?.type
    });
  }

  return (
    plan && (
      <S.Wrap>
        <S.PlanInfoWrap>
          <S.PlanInfoImageWrap>
            <S.PlanInfoImage src={thumbnailFile? URL.createObjectURL(thumbnailFile): plan.thumbnail} />
            <S.PlanInfoImageEdit htmlFor='thumbnail_upload'>썸네일 수정</S.PlanInfoImageEdit>
            <input
              type='file'
              id='thumbnail_upload'
              onChange={e => thumbnailInputHandler(e)}
              style={{display: 'none'}}
            />
          </S.PlanInfoImageWrap>
          <S.PlanInfo>
            <S.PlanTitleInput
              placeholder='플랜 제목 입력'
              onChange={(e) => setPlanTitle(e.target.value)}
              value={planTitle}
            />
            <S.PlanCategorySelect
              onChange={(e) => setPlanCategoryId(Number(e.target.value))}
              value={planCategoryId}
            >
              <option value={0}>플랜 카테고리 선택</option>
            {
              planCategoryList.map(item => (
                <option value={item.categoryId}>{item.name}</option>
              ))
            }</S.PlanCategorySelect>
            <S.PlanContentTextArea
              placeholder='플랜 정보 입력'
              onChange={(e) => setPlanContent(e.target.value)}
              value={planContent}
            />
            <S.PlanEditButton onClick={updatePlan}>플랜 수정</S.PlanEditButton>
          </S.PlanInfo>
        </S.PlanInfoWrap>
        <S.PlanImageList>
          {imageList.map((item, i) => (
            <S.PlanImageItem>
              <img src={item.imageFile? URL.createObjectURL(item.imageFile): item.imageUrl} alt="플랜 설명 이미지" />
              <S.PlanInfoImageEdit htmlFor={`plan_image_upload_${i}`}>이미지 수정</S.PlanInfoImageEdit>
              <input
                type='file'
                id={`plan_image_upload_${i}`}
                onChange={e => imageEditInputHandler(e, i)}
                style={{display: 'none'}}
              />
            </S.PlanImageItem>
          ))}
        </S.PlanImageList>
      </S.Wrap>
    )
  );
};

export default PlanEdit;
