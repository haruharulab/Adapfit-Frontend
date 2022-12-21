import styled from "styled-components";
import { AccentButton, Button } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { Input } from "../../../components/common/input/style";

export const Header = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  h2 {
    font-size: 36px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Search = styled(Input)`
  max-width: 300px;
  background-color: white;
`;

export const Create = styled(AccentButton)`
  white-space: nowrap;
`;

export const MenuWrap = styled.div`
  display: flex;
  gap: 10px;
  div {
    text-align: center;
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 10px;
    background-color: white;
    color: black;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  span {
    background-color: #f2f2f2;
    width: 15%;
    text-align: center;
    line-height: 40px;
  }
`;

export const Contain = styled.div`
  ${Container}
  margin: 30px auto;
  padding: 0 10px;
`;
