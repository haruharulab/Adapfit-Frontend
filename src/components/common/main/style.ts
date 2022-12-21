import styled from "styled-components";

export const Main = styled.main<{
  height?: number
}>`
  padding-top: 65px;
  padding-bottom: ${({height}) => `${height? height + 100: 0}px`};
  position: relative;
  min-height: 100%;
`;