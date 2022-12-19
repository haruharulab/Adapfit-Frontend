import * as S from "./style";
import { Item } from "../../components/employment";
import { useEffect, useState } from "react";
import getrecuritmentApi from "../../api/recruitment/getrecuritment.api";

export default function Employment() {
  const [position, setJobGroup] = useState("");
  const [career, setCareer] = useState("");
  const [employmentPattern, setEmploymentPattern] = useState("");
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    const req = {
      position,
      career: career,
      employmentPattern,
    };
    const temp = await getrecuritmentApi.getRecuritment(req);
    console.log(temp);
    setData(temp);
  };
  useEffect(() => {
    getData();
  }, [position, career, employmentPattern]);
  return (
    <S.Contain>
      <S.Header>
        <S.Title>지금 채용 중인 포지션이에요!</S.Title>
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
            <option value={"3 "}>3</option>
          </select>
        </S.Search>
      </S.Header>
      {data.map((i: any) => {
        return (
          <a href={`employment/${i.id}`} style={{ color: "black" }}>
            <Item
              title={i.title}
              position={i.position}
              career={i.career}
              workingArea={i.workingArea}
            />
          </a>
        );
      })}
    </S.Contain>
  );
}
