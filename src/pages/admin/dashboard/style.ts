import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { Main } from "../../../components/common/main/style";
import { ScrollBar } from "../../../components/common/scrollBar/style";

export const AdminPageWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${Main} {
    flex: auto;
    padding: 0;
    ${ScrollBar}
  }
`;

export const Contain = styled.div`
  ${Container}
  max-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  width: 100%;
  height: 100%;
  & > div {
    gap: 20px;
  }
  & > div > div {
    padding: 20px;
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const LeftWrap = styled.div`
  flex: 1.5;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RightWrap = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NoticeWrap = styled.div`
  flex: auto;
  background-color: white;
  border-radius: 10px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmploymentWrap = styled.div`
  flex: auto;
  background-color: white;
  border-radius: 10px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const AdminInfoWrap = styled.div`
  flex: auto;
  background-color: white;
  border-radius: 10px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const BannerWrap = styled.div`
  flex: auto;
  background-color: white;
  border-radius: 10px;
`;
