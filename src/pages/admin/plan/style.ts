import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { Shadow } from "../../../components/common/shadow/style";

export const Contain = styled.div`
  ${Container}
  ${Shadow}
  margin-top: 70px;
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
  `;

export const Header = styled.div`
  font-weight: 700;
  font-size: 34px;
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const MenuWrap = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const Plan = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${Container}
  max-width: 1400px;
`;
