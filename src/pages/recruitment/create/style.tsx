import styled from "styled-components";
import { FormSubmitButton } from "../../../components/common/button/style";
import { Container } from "../../../components/common/container/style";
import { DropdownOption, DropdownTitle } from "../../../components/common/dropdownMenu/style";
import { Input } from "../../../components/common/input/style";

export const Contain = styled.div`
  ${Container}
  margin-top: 70px;
  max-width: 1100px;
  padding: 0 20px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
  ${Input} {
    background-color: white;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  ${FormSubmitButton} {
    align-self: flex-end;
    max-width: 150px;
  }
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 30px;
  padding: 0 10px;
  margin: 30px 0;
`;

export const SelectBoxWrap = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: end;
  gap: 10px;
  ${DropdownTitle}, ${DropdownOption} {
    color: white;
    background-color: #353455;
  }
`;
