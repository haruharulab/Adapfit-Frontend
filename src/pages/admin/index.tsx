import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/user.store";
import { Resume } from "../../types/resume.type";
import { Authority } from "../../types/user.type";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as S from "./style";

const AdminDashboard = () => {
  const user = useRecoilValue(userState);
  const { ajax } = useAjax();
  const [resumeList, setResumeList] = useState<Resume[]>([]);

  useEffect(() => {
    if (user.authority !== Authority.ADMIN) return;
    getResumeList();
  }, [user]);

  const getResumeList = async () => {
    const [data, error] = await ajax<Resume[]>({
<<<<<<< Updated upstream
      url: 'resume',
      method: HttpMethod.GET
    });
    if (error) return;
    setResumeList(data);
  }
  
  return (
    user.authority === Authority.ADMIN
    ? <S.Contain>
=======
      url: "resume",
      method: HttpMethod.GET,
      errorCallback() {
        return true;
      },
    });
    if (error) return;
    setResumeList(data);
  };

  return user.authority === Authority.ADMIN ? (
    <S.Contain>
>>>>>>> Stashed changes
      <S.LeftWrap>
        <S.NoticeWrap>
          <div>
            <h3>공지사항</h3>
            <Link to="/admin/notice">
              <BsPlus size={30} />
            </Link>
          </div>
        </S.NoticeWrap>
        <S.EmploymentWrap>
          <div>
            <h3>채용</h3>
            <Link to="/admin/employment">
              <BsPlus size={30} />
            </Link>
          </div>
          <ul>
            {resumeList.map((resume) => (
              <li>{`[${resume.position} 부문] ${resume.name}님이 지원했습니다. 일시: ${resume.createdAt}`}</li>
            ))}
          </ul>
        </S.EmploymentWrap>
      </S.LeftWrap>
      <S.RightWrap>
        <S.AdminInfoWrap>
          <h3>관리자</h3>
          <p>{user.userId}</p>
        </S.AdminInfoWrap>
        <S.BannerWrap></S.BannerWrap>
      </S.RightWrap>
    </S.Contain>
  ) : (
    <></>
  );
};

export default AdminDashboard;
