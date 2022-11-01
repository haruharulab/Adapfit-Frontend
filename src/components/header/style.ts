import styled from "styled-components";

export const Headers = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: lightgray;
`;

export const LogoWrap = styled.div`
  width: 160px;
  margin-left: 30px;
  height: 100px;
  background-color: red;
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  font-weight: bold;
  font-size: 21px;
  padding-right: 20px;
  a {
    color: black;
    text-decoration-line: none;
  }
`;
