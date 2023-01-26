import styled from "styled-components";

export const Main = styled.main<{
  height?: number
}>`
  margin: 0 15px;
  @media screen and (max-width: 850px) {
    margin: 0 5px;
  }
  padding-top: 65px;
  padding-bottom: ${({height}) => `${height? height + 50: 0}px`};
  position: relative;
  min-height: 100%;
`;