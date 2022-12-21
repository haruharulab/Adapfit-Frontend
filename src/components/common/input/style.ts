import styled from "styled-components";

export const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 15px;
  transition: box-shadow .25s;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #f6f6f6;
  font-size: 15px;
  &:focus {
    box-shadow: 0 0 0 2.5px #f2640b inset;
  }
`;