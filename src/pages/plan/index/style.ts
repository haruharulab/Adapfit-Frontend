import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { DropdownTitle } from "../../../components/common/dropdownMenu/style";

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-top: 80px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    margin-left: 20px;
    font-size: 36px;
    font-weight: bold;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${Container}
  width: 100%;
  max-width: 1100px;
  padding: 0 40px;
  /* ${DropdownTitle} {
    background-color: #DDD;
  } */
`;

export const Plan = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${Container}
  max-width: 1400px;
`;
