import styled, { css } from "styled-components";
import { Shadow } from "../shadow/style";

export const ButtonStyle = css`
  display: inline-block;
  padding: 11px 20px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #DDD !important;
  }
`;

export const Button = styled.button`
  ${Shadow}
  ${ButtonStyle}
`;

export const AccentButton = styled(Button)`
  ${Shadow}
  background-color: #f2640b;
  color: white;
`;

export const FormSubmitButton = styled(AccentButton)`
  ${Shadow}
  width: 100%;
  font-size: 16px;
`;