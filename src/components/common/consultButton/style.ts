import { Link } from "react-router-dom";
import styled from "styled-components";
import { AccentShadow } from "../shadow/style";

export const ConsultLink = styled.a`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  color: black;
  background-color: #fae100;
  border-radius: 10px;
  padding: 10px 15px;
  gap: 10px;
  right: 50px;
  bottom: 50px;
  transition: .25s;
  svg {
    width: 36px;
    height: 36px;
  }
  ${AccentShadow}
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 700px) {
    right: 20px;
    bottom: 20px;
  }
`;