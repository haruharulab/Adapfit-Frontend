import { useEffect, useState } from "react";
import { Plan, PlanCategory } from "../../../types/plan.type";
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

  useEffect(() => {
    if (!planId) return;
    (async () => {
      const planInfo = await getPlan(planId);
      setPlan(planInfo);
      setPlanTitle(planInfo.title);
      setPlanContent(planInfo.content);
      setPlanCategoryId(planInfo.category.categoryId);
    })();
    (async () => setPlanCategoryList(await getPlanCategoryList()))();
  }, [planId]);

  const updatePlan = async () => {
    const [, error] = await ajax({
      url: `plan/${planId}`,
      method: HttpMethod.PUT,
      payload: {
        title: planTitle,
        content: planContent
      }
    });
    if (error) return;
    navigate('/admin/plan');
  }

  return (
    plan && (
      <S.Wrap>
        <S.PlanInfoWrap>
          <S.PlanInfoImage src={plan.thumbnail} />
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
          {plan.images.map((item) => (
            <S.PlanImageItem>
              <img src={item.image} alt="플랜 설명 이미지" />
            </S.PlanImageItem>
          ))}
        </S.PlanImageList>
      </S.Wrap>
    )
  );
};

export default PlanEdit;
