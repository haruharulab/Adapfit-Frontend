import styled from "styled-components";
import { AccentButton, ButtonStyle } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { AccentText } from "../../../components/common/text/style";

export const Wrap = styled.div`
`;

export const PlanInfoImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

export const PlanInfo = styled.div`
  ${Container}
  max-width: 900px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding-top: 75px;
  hr {
    margin: 65px 0 75px;
  }
`

export const PlanTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
`

export const PlanCategory = styled(AccentText)`
  font-weight: bold;
`

export const PlanSubTitle = styled.div`
  padding-top: 10px;
`

export const PlanConsultLink = styled.a`
  ${ButtonStyle}
  background-color: #f2640b;
  color: white;
  margin-top: 50px;
  width: 100%;
  max-width: 225px;
  align-self: center;
  padding: 8px;
  font-size: 19px;
`

export const PlanContent = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 10px;
  img {
    max-width: 100%;
    height: auto;
  }
  hr {
    margin: 100px 0 50px;
  }
`;

export const PlanImageItem = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  img {
    max-width: 100%;
  }
`;

export const PlanBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
  @media screen and (max-width: 760px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  ${PlanConsultLink} {
    margin: 0;
  }
`;

export const PlanShareWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #565656;
  a {
    display: flex;
  }
  svg {
    color: #565656;
  }
  & > * {
    cursor: pointer;
  }
`;
