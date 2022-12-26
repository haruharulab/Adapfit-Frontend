import * as S from './style'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { DropdownMenu } from "../../../components/common/dropdownMenu";
import RecruitmentItem from "../../../components/employment";
import { userState } from "../../../store/user.store";
import { Recruitment, RecruitmentInfo } from "../../../types/recruitment.type";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";

const ManageEmployment = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();
  const {ajax} = useAjax();
  const [position, setPosition] = useState('모든 직군');
  const [career, setCareer] = useState('모든 경력');
  const [pattern, setPattern] = useState('모든 채용패턴');
  const [recruitmentList, setRecruitmentList] = useState<Recruitment[]>([]);
  const [recruitmentInfo, setRecruitmentInfo] = useState<RecruitmentInfo>({
    positionList: ['모든 직군'],
    careerList: ['모든 경력'],
    patternList: ['모든 채용패턴']
  });

  useEffect(() => {
    getRecruitmentInfo();
  }, []);

  useEffect(() => {
    getRecruitmentList();
  }, [position, career, pattern]);

  const getRecruitmentList = async () => {
    const [data, error] = await ajax<{
      count: number,
      data: Recruitment[]
    }>({
      url: 'recruitment',
      method: HttpMethod.GET,
      config: {
        params: {
          position: position === '모든 직군'? '': position,
          career: career === '모든 경력'? '': career,
          employmentPattern: pattern === '모든 채용패턴'? '': pattern
        }
      },
      noToken: true
    });
    if (error) return;
    setRecruitmentList(data.data);
  }
  
  const getRecruitmentInfo = async () => {
    const [data, error] = await ajax<RecruitmentInfo>({
      url: 'recruitment/info',
      method: HttpMethod.GET,
      noToken: true
    });
    if (error) return;
    data.positionList = ['모든 직군'].concat(data.positionList);
    data.careerList = ['모든 경력'].concat(data.careerList);
    data.patternList = ['모든 채용패턴'].concat(data.patternList);
    setRecruitmentInfo(data);
  }

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
  }, [user]);
  
  return (
    <S.Contain>
      <S.Header>채용 관리</S.Header>
      <S.MenuWrap>
        <S.SearchBox placeholder="검색" />
        <DropdownMenu
          title={position}
          menus={
            recruitmentInfo.positionList.map(position => ({
              text: position,
              callback: () => setPosition(position)
            }))
          }
        />
        <DropdownMenu
          title={career}
          menus={
            recruitmentInfo.careerList.map(career => ({
              text: career,
              callback: () => setCareer(career)
            }))
          }
        />
        <DropdownMenu
          title={pattern}
          menus={
            recruitmentInfo.patternList.map(pattern => ({
              text: pattern,
              callback: () => setPattern(pattern)
            }))
          }
        />
        <S.CreateButton to='/admin/employment/create'>
          채용공고 만들기
        </S.CreateButton>
      </S.MenuWrap>
      {recruitmentList.map(recruitment => <RecruitmentItem recruitment={recruitment} />)}
    </S.Contain>
  );
}

export default ManageEmployment;