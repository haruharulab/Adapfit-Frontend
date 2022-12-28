import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../../components/common/container/style";

export const NoticeWrap = styled.div`
  ${Container}
  padding: 0 10px;
  `;

export const NavigateHeader = styled(Link)`
  font-size: 30px;
  padding: 0 10px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 30px;
  color: black;
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 34px;
  padding: 0 10px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  h2 {
    font-weight: bold;
    font-size: 30px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span:first-child {
      font-size: 16px;
    }
    span:last-child {
      color: gray;
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  img {
    max-width: 100%;
  }
`;