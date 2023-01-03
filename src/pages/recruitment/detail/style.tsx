import { Link } from "react-router-dom";
import styled from "styled-components";
import { AccentButtonLink } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { Shadow } from "../../../components/common/shadow/style";

export const RecruitmentWrap = styled.div`
  ${Container}
  ${Shadow}
  max-width: 1000px;
  padding: 0 10px;
  ${AccentButtonLink} {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 30px auto;
    font-size: 16px;
  }
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
  font-size: 30px;
  padding: 0 10px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
  div {
    font-size: 16px;
    span {
      color: gray;
    }
  }
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  min-height: 100px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin: 20px 5px;
  @media screen and (max-width: 760px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  ${AccentButtonLink} {
    margin: 0;
  }
`;

export const ShareWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #565656;
  a {
    display: flex;
  }
  svg {
    color: #565656;
  }
  & > * {
    cursor: pointer;
  }
`;
