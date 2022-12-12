import * as S from './style'

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
        </S.Contain>
    )
}