import { AiFillSetting } from "react-icons/ai";
import { Recruitment } from '../../types/recruitment.type';
import { DropdownMenu } from "../common/dropdownMenu";
import * as S from "./style";

interface RecruitmentItemProps {
  recruitment: Recruitment
}

const RecruitmentItem = ({
  recruitment
}: RecruitmentItemProps) => (
  <S.Item to={`/recruitment/${recruitment.id}`}>
    <S.InfoWrap>
      <span>{recruitment.title}</span>
      <span>{recruitment.position}</span>
      <span>{recruitment.career}</span>
      <span>{recruitment.employmentPattern === 'PERMANENT_EMPLOYEE'? '정규직': '비정규직'}</span>
    </S.InfoWrap>
  </S.Item>
);

export default RecruitmentItem;
