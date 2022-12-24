import { Recruitment } from "../../types/recruitment.type";
import * as S from "./style";

interface RecruitmentItemProps {
  recruitment: Recruitment
}

const RecruitmentItem = ({
  recruitment
}: RecruitmentItemProps) => (
  <S.Wrap to={`/employment/${recruitment.id}`}>
    <S.Name>{recruitment.title}</S.Name>
    <span>{recruitment.jobGroup}</span>
    <span>{recruitment.career}</span>
  </S.Wrap>
);

export default RecruitmentItem;
