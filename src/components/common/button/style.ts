import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #DDD;
  }
`;

export const AccentButton = styled(Button)`
  background-color: #f2640b;
  color: white;
`;

export const FormSubmitButton = styled(AccentButton)`
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
`;