import styled from "styled-components";
import { AccentButton } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { Input } from "../../../components/common/input/style";

export const Wrap = styled.div`
  padding-bottom: 100px;
`;

export const PlanInfoImageWrap = styled.div`
  position: relative;
  flex: 1.5;
  display: flex;
  align-items: center;
`;

export const PlanInfoImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

export const PlanInfo = styled.form`
  ${Container}
  max-width: 900px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding-top: 75px;
  hr {
    margin: 65px 0 75px;
  }
`

export const PlanCategorySelect = styled.select`
  background-color: white;
  text-align: left;
  padding: 5px 10px;
  color: #494949;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

export const PlanTitleInput = styled(Input)`
  width: 100%;
  max-width: 500px;
  background-color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  border: none;
  padding: 5px;
`;

export const PlanSubTitleInput = styled(Input)`
  width: 100%;
  max-width: 300px;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  border: none;
  padding: 5px;
`;

export const EditorWrap = styled.div`
  margin-top: 50px;
  background-color: white;
  width: 100%;
  font-size: 16px;
  background-color: white;
  border: none;
  border-radius: 15px;
  padding: 10px;
`

export const EditPlanInfoImage = styled.label`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #00000066;
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

export const PlanEditButton = styled(AccentButton)`
  margin-top: 50px;
  width: 100%;
  max-width: 225px;
  align-self: center;
  padding: 10px;
  font-size: 17px;
`
