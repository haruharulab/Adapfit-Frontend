import styled, { css } from "styled-components";

export const ButtonStyle = css`
  display: inline-block;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #DDD;
  }
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const AccentButton = styled(Button)`
  background-color: #f2640b;
  color: white;
`;

export const FormSubmitButton = styled(AccentButton)`
  width: 100%;
  font-size: 16px;
`;