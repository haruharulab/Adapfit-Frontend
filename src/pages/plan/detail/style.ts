import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { ScrollBar } from "../../../components/common/scrollBar/style";

export const Wrap = styled.div`
  ${Container}
`;

export const PlanInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  height: 500px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

export const PlanInfoImageWrap = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;

export const PlanInfoImage = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 20px;
`;

export const PlanInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    max-height: 200px;
  }
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
  cursor: pointer;
`

export const PlanImageList = styled.ul`
  ${Container}
  margin-top: 50px;
  max-width: 900px;
`;

export const PlanImageItem = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  img {
    max-width: 100%;
  }
`;
