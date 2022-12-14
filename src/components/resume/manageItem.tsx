import { Resume } from '../../types/resume.type';
import { dateToShortStr } from '../../utils/date';
import * as S from "./style";

interface ManageResumeItemProps {
  resume: Resume
}

const ResumeManageItem = ({
  resume
}: ManageResumeItemProps) =>  (
  <S.Item to={`/admin/resume/${resume.resumeId}`} saw={resume.saw}>
    <S.InfoWrap>
      <span>{resume.position}</span>
      <span>{resume.name}</span>
      <span>{new Date(resume.createdAt).toLocaleString()}</span>
    </S.InfoWrap>
  </S.Item>
);

export default ResumeManageItem;
