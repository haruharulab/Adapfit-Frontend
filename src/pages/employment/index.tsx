import * as S from './style'
import {Item} from "../../components/employment";

export default function Employment() {
    return (
        <S.Contain>
            <h2>지금 채용 중인 포지션이에요!</h2>
            <S.Header>
                <S.Search placeholder={"원하는 포지션을 검색해주세요"}></S.Search>
                <span>채용 직군</span>
                <span>경력</span>
                <span>근무지역</span>
            </S.Header>
            <Item title={"피트니스센터메니저"} jobGroup={"매니저"} career={"1"} employmentArea={"부산"}/>
            <Item title={"피트니스센터메니저"} jobGroup={"매니저"} career={"1"} employmentArea={"부산"}/>
            <Item title={"피트니스센터메니저"} jobGroup={"매니저"} career={"1"} employmentArea={"부산"}/>

        </S.Contain>
    )
}