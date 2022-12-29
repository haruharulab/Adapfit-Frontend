import styled from "styled-components";
import { FormSubmitButton } from "../../components/common/button/style";
import { Container } from "../../components/common/container/style";
import { Input } from "../../components/common/input/style";

export const Contain = styled.div`
  ${Container}
  margin-top: 70px;
  max-width: 700px;
  padding: 0 20px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  p {
    margin: 10px 0;
  }
  ${Input} {
    background-color: white;
  }
`;

export const Header = styled.h2`
  font-weight: 700;
  font-size: 34px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const FileInput = styled(Input)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: gray;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SubmitBtn = styled(FormSubmitButton)<{isFilled: boolean}>`
  display: block;
  width: 400px;
  margin: 30px auto;
  background-color: ${({isFilled}) => isFilled? '#F2640B': '#d9d9d9'};
  cursor: ${({isFilled}) => isFilled? 'pointer': ''};
`;
