import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyle } from "../../../../components/common/button/style";
import { Container } from "../../../../components/common/container/style";
import { Input } from "../../../../components/common/input/style";

export const Contain = styled.div`
  ${Container}
  margin-top: 70px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 34px;
  padding: 0 20px;
  margin: 40px 0;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const ItemWrap = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;
