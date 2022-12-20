import styled from "styled-components";
import { Container } from "../../../components/common/container/style";

export const Header = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  * {
    border-radius: 10px;
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

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  resize: none;
  padding: 10px;
  background-color: white;
  border: 0px;
  select {
    font-size: 1.2rem;
    width: 25%;
    height: 100%;
  }
`;
export const Contain = styled.div`
  ${Container}
  margin: auto;
  margin-top: 10px;
  width: 90%;
`;
