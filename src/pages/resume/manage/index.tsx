import * as S from './style'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import ResumeManageItem from '../../../components/resume/manageItem';
import { Resume } from '../../../types/resume.type';
import ResumeInfoHeader from '../../../components/resume/header';

const ManageResume = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();
  const {ajax} = useAjax();
  const [resumeList, setResumeList] = useState<Resume[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
    getResumeList();
  }, [user]);

  const getResumeList = async () => {
    const [data, error] = await ajax<{
      count: number,
      data: Resume[]
    }>({
      url: 'resume',
      method: HttpMethod.GET
    });
    if (error) return;
    setResumeList(data.data);
  }
  
  return (
    <S.Contain>
      <S.Header>채용 지원목록</S.Header>
      <S.ItemWrap>
        <ResumeInfoHeader />
        {resumeList.map(resume => <ResumeManageItem resume={resume} />)}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default ManageResume;