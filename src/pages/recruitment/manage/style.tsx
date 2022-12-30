import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyle } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { Input } from "../../../components/common/input/style";

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
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const MenuWrap = styled.div`
  padding: 0 10px;
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const SearchBox = styled(Input)`
  flex: auto;
  width: auto;
  background-color: white;
  padding: 11px 15px;
  @media screen and (max-width: 600px) {
    flex: 100%;
  }
`;

export const CreateButton = styled(Link)`
  ${ButtonStyle}
  color: white;
  background-color: #353455;
`;

export const ItemWrap = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;
