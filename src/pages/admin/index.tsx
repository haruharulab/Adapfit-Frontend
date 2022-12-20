import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/user.store";
import { Resume } from "../../types/resume.type";
import { Authority } from "../../types/user.type";
import { HttpMethod, useAjax } from "../../utils/ajax";
import * as S from "./style";

const AdminDashboard = () => {
  const user = useRecoilValue(userState);
  const {ajax} = useAjax();
  const [resumeList, setResumeList] = useState<Resume[]>([]);

  useEffect(() => {
    if (user.authority !== Authority.ADMIN) return;
    getResumeList();
  }, [user]);

  const getResumeList = async () => {
    const [data, error] = await ajax<Resume[]>({
      url: 'resume',
      method: HttpMethod.GET
    });
    if (error) return;
    setResumeList(data);
  }
  
  return (
    user.authority === Authority.ADMIN
    ? <S.Contain>
      <S.LeftWrap>
        <S.NoticeWrap>
          <h3>공지사항</h3>
        </S.NoticeWrap>
        <S.EmploymentWrap>
          <h3>채용</h3>
          <ul>
            {resumeList.map(resume => <li>{`[${resume.position} 부문] ${resume.name}님이 지원했습니다. 일시: ${resume.createdAt}`}</li>)}
          </ul>
        </S.EmploymentWrap>
      </S.LeftWrap>
      <S.RightWrap>
        <S.AdminInfoWrap>
          <h3>관리자</h3>
          <p>
            {user.userId}
          </p>
        </S.AdminInfoWrap>
        <S.BannerWrap>
        
        </S.BannerWrap>
      </S.RightWrap>
    </S.Contain>
    : <></>
  );
};

export default AdminDashboard;
