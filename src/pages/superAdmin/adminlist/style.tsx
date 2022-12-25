import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
import { Input } from "../../../components/common/input/style";

export const Header = styled.div`
  font-weight: 700;
  font-size: 30px;
  padding: 0 10px;
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

export const SearchBox = styled(Input)`
  flex: auto;
  width: auto;
  background-color: white;
  padding: 11px 15px;
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

export const ItemWrap = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;
