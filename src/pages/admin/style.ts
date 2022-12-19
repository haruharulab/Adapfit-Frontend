import styled from "styled-components";
import { Container } from "../../components/common/container/style";

export const Contain = styled.div`
  ${Container}
  max-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  width: 100%;
  height: calc(100% - 100px);
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
`;

export const EmploymentWrap = styled.div`
  flex: auto;
  background-color: white;
  border-radius: 10px;
`;

export const AdminInfoWrap = styled.div`
  flex: auto;
  background-color: white;
  border-radius: 10px;
`;

export const BannerWrap = styled.div`
  flex: auto;
  background-color: white;
  border-radius: 10px;
`;
