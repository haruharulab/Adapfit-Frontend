import { Link } from "react-router-dom";
import styled from "styled-components";
import { AccentButton } from "../button/style";
import { Input } from "../input/style";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px !important;
  ${AccentButton} {
    background-color: #353455;
  }
  ${Input} {
    &:focus {
      box-shadow: 0 0 0 2.5px #353455 inset;
    }
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const MenuText = styled.span`
  font-size: 15px;
  color: gray;
  cursor: pointer;
`;
