import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { ScrollBar } from "../../../components/common/scrollBar/style";

export const Wrap = styled.div`
  ${Container}
  padding-bottom: 20px;
`;

export const PlanInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  height: 500px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const PlanInfoImageWrap = styled.div`
  position: relative;
  flex: 1.5;
  display: flex;
  align-items: center;
`;

export const EditPlanInfoImage = styled.label`
  opacity: 0;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
  color: white;
  font-size: 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #000000AA;
    opacity: 1;
  }
`;

export const AddPlanInfoImage = styled.label`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #888888;
    opacity: 1;
  }
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

export const PlanTitleInput = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
  border: none;
  border-radius: 10px;
  padding: 5px;
`

export const PlanCategorySelect = styled.select`
  margin-top: 10px;
  align-self: flex-start;
  background-color: white;
  text-align: center;
  color: #494949;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  `;

export const PlanContentTextArea = styled.textarea`
  flex: auto;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 40px;
  font-size: 16px;
  background-color: white;
  border: none;
  border-radius: 15px;
  padding: 10px;
  resize: none;
  ${ScrollBar}
`

export const PlanEditButton = styled.button`
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
margin-top: 50px;
`;

export const PlanImageItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  list-style: none;
  img {
    max-width: 100%;
  }
`;
