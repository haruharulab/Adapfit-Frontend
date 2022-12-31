import { AiFillSetting } from "react-icons/ai";
import { Link, NavigateFunction } from 'react-router-dom';
import { Recruitment } from '../../types/recruitment.type';
import { DropdownMenu, DropdownMenuOption } from "../common/dropdownMenu";
import * as S from "./style";

interface RecruitmentManageItemProps {
  recruitment: Recruitment,
  navigate: NavigateFunction,
  deleteRecruitment: (id: number) => void;
}

const RecruitmentManageItem = ({
  recruitment,
  navigate,
  deleteRecruitment
}: RecruitmentManageItemProps) => {
  const dropdownMenus: DropdownMenuOption[] = [
    {text: '수정', callback: () => navigate(`/admin/recruitment/${recruitment.id}`)},
    {text: '삭제', callback: () => deleteRecruitment(recruitment.id)}
  ];

  return (
    <S.Item as='div'>
      <S.InfoWrap>
        <span><Link to={`/recruitment/${recruitment.id}`}>{recruitment.title}</Link></span>
        <span>{recruitment.position}</span>
        <span>{recruitment.career}</span>
        <span>{recruitment.employmentPattern === 'PERMANENT_EMPLOYEE'? '정규직': '비정규직'}</span>
      </S.InfoWrap>
      <DropdownMenu title={<AiFillSetting size={22} color='white' />} menus={dropdownMenus} />
    </S.Item>
  );
}

export default RecruitmentManageItem;
