import styled, { css } from "styled-components";
import { Shadow } from "../shadow/style";

export const InputStyle = css`
  width: 100%;
  padding: 11px 13px;
  transition: box-shadow .25s;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 15px;
  &:focus {
    box-shadow: 0 0 0 2.5px #f2640b inset;
  }
  ${Shadow}
`;

export const Input = styled.input`
  ${InputStyle}
`;