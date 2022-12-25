import * as S from "./style";
import { useEffect, useState } from "react";
import { Recruitment, RecruitmentInfo } from "../../types/recruitment.type";
import { HttpMethod, useAjax } from "../../utils/ajax";
import RecruitmentItem from "../../components/employment";
import { DropdownMenu } from "../../components/common/dropdownMenu";

const Employment = () => {
  const {ajax} = useAjax();
  const [position, setPosttion] = useState('모든 직군');
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

  return (
    <S.Contain>
      <S.Header>지금 채용 중인 포지션이에요!</S.Header>
      <S.MenuWrap>
        <S.SearchBox placeholder="검색" />
        <DropdownMenu
          title={position}
          menus={
            recruitmentInfo.positionList.map(position => ({
              text: position,
              callback: () => setPosttion(position)
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
      </S.MenuWrap>
      {recruitmentList.map(recruitment => <RecruitmentItem recruitment={recruitment} />)}
    </S.Contain>
  );
}

export default Employment;
