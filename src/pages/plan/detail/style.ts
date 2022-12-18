import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { ScrollBar } from "../../../components/common/scrollBar/style";

export const Wrap = styled.div`
  ${Container}
`;

export const PlanInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const PlanInfoImage = styled.img`
  flex: 1.5;
  max-height: 500px;
`;

export const PlanInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: left;
`

export const PlanTitle = styled.h2`
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
`

export const PlanCategory = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  color: gray;
  `

export const PlanContent = styled.div`
  flex: auto;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 40px;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  ${ScrollBar}
`

export const PlanConsultButton = styled.button`
  margin-top: 20px;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 13px;
  font-size: 17px;
  color: white;
  background-color: #f2640b;
`

export const PlanImageList = styled.ul`
margin-top: 50px;
`;

export const PlanImageItem = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  img {
    max-width: 100%;
  }
`;
