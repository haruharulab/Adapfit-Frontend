import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { Input, InputStyle } from "../../../components/common/input/style";

export const Contain = styled.div`
  ${Container}
  margin: 70px auto;
  max-width: 700px;
  padding: 0 20px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  p {
    margin: 10px 0;
  }
  ${Input} {
    background-color: white;
  }
`;

export const Header = styled.h2`
  font-weight: 700;
  font-size: 34px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const FileLink = styled.a`
  ${InputStyle}
  display: flex;
  align-items: center;
  gap: 10px;
  color: gray;
  background-color: white;
  svg {
    width: 20px;
    height: 20px;
  }
`;
