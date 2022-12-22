import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { Shadow } from "../../../components/common/shadow/style";
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-top: 30px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Container}
  width: 100%;
  max-width: 1240px;
  h2 {
    margin-left: 20px;
    font-size: 36px;
    font-weight: bold;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Plan = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${Container}
  max-width: 1400px;
`;
