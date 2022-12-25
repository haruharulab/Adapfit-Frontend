import styled from "styled-components";
import { Container } from "../../components/common/container/style";
import { Input } from "../../components/common/input/style";

export const Contain = styled.div`
  ${Container}
  margin-top: 70px;
  max-width: 1100px;
  padding: 0 20px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

export const MenuWrap = styled.div`
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
