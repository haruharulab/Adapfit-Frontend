import * as S from "./style";
import { Item } from "../../components/employment";
import { useEffect, useState } from "react";
import getrecuritmentApi from "../../api/recruitment/getrecuritment.api";

export default function Employment() {
  const [jobGroup, setJobGroup] = useState("");
  const [career, setCareer] = useState("");
  const [employmentPattern, setEmploymentPattern] = useState("");
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    const req = {
      jobGroup: jobGroup,
      career: career,
      employmentPattern: employmentPattern,
    };
    const temp = await getrecuritmentApi.getRecuritment(req);
    console.log(temp);
    setData(temp);
  };
  useEffect(() => {
    getData();
  }, [jobGroup, career, employmentPattern]);
  return (
    <S.Contain>
      <h2>지금 채용 중인 포지션이에요!</h2>
      <S.Header>
        <S.Search>
          <select onChange={(e) => setJobGroup(e.target.value)}>
            <option value={""}>채용직군</option>
            <option value={"CX"}>CX</option>
            <option value={"DEVELOPER"}>DEVELOPER</option>
            <option value={"3"}>3</option>
          </select>
          <select onChange={(e) => setCareer(e.target.value)}>
            <option value={""}>경력</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
          </select>
          <select onChange={(e) => setEmploymentPattern(e.target.value)}>
            <option value={""}>채용패턴</option>
            <option value={"INTERN"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
          </select>
        </S.Search>
        <span>채용 직군</span>
        <span>경력</span>
        <span>근무지역</span>
      </S.Header>
      {data.map((i: any) => {
        return (
          <Item
            title={i.title}
            jobGroup={i.jobGroup}
            career={i.career}
            workingArea={i.workingArea}
          />
        );
      })}
    </S.Contain>
  );
}
