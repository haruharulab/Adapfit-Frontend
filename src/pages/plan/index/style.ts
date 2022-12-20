import styled from "styled-components";
import { Container } from "../../../components/common/container/style";
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-top: 30px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Container}
  width: 100%;
  max-width: 1240px;
  select {
    padding: 5px 5px 5px 10px;
    margin-right: 20px;
    background-color: #000000;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.53);
    color: white;
    font-size: 16px;
  }
  h2 {
    margin-left: 20px;
    font-size: 36px;
    font-weight: bold;
  }
`;

export const Plan = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${Container}
  max-width: 1400px;
`;
