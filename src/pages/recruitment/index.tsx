import * as S from "./style";
import { useEffect, useState } from "react";
import { Recruitment, RecruitmentInfo } from "../../types/recruitment.type";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { DropdownMenu } from "../../components/common/dropdownMenu";
import RecruitmentItem from "../../components/recruitment/item";
import RecruitmentInfoHeader from "../../components/recruitment/header";

const RecruitmentList = () => {
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
  const [showRecruitmentList, setShowRecruitmentList] = useState<Recruitment[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    getRecruitmentInfo();
  }, []);

  useEffect(() => {
    getRecruitmentList();
  }, [position, career, pattern]);

  useEffect(() => filterRecruitmentList(), [searchQuery, recruitmentList]);

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
          employmentPattern: pattern === '모든 채용패턴'? '': pattern === '정규직'? 'PERMANENT_EMPLOYEE': 'NON_REGULAR_WALKER'
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

  const filterRecruitmentList = () => {
    if (!searchQuery) return setShowRecruitmentList(recruitmentList);
    const showRecruitmentList = recruitmentList.filter(recruitment => filterRecruitmentByTitle(recruitment, searchQuery));
    setShowRecruitmentList(showRecruitmentList);
  }

  const filterRecruitmentByTitle = (recruitment: Recruitment, query: string) => recruitment.title.includes(query);

  return (
    <S.Contain>
      <S.Header>지금까지 올라온 채용공고예요!</S.Header>
      <S.MenuWrap>
        <S.SearchBox placeholder="채용공고 검색" onChange={event => setSearchQuery(event.target.value)} />
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
      <S.ItemWrap>
        <RecruitmentInfoHeader />
        <hr />
        {showRecruitmentList.map(recruitment => <RecruitmentItem recruitment={recruitment} />)}
      </S.ItemWrap>
    </S.Contain>
  );
}

export default RecruitmentList;
