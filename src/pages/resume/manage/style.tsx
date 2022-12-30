import styled from "styled-components";
import { Container } from "../../../components/common/container/style";

export const Contain = styled.div`
  ${Container}
  margin-top: 70px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

export const Header = styled.div`
  margin: 20px 0;
  font-weight: 700;
  font-size: 34px;
  padding: 0 20px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const ItemWrap = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;
