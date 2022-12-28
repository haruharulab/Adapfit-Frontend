import styled from "styled-components";
import { Container } from "../../components/common/container/style";
import { Input } from "../../components/common/input/style";
import { Shadow } from "../../components/common/shadow/style";
import { Item } from "../../components/recruitment/style";

export const Contain = styled.div`
  ${Container}
  ${Shadow}
  margin: 70px auto;
  padding: 0 10px;
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 34px;
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const ItemWrap = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  ${Item} {
    background-color: #f5f5f5;
    color: black;
    &:hover {
      background-color: #f49e4b;
    }
  }
`;
