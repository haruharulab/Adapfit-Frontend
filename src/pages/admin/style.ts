import styled from "styled-components";
import { AccentButton } from "../../components/common/button/style";
import { Input } from "../../components/common/input/style";
import { Main } from "../../components/common/main/style";
import { ScrollBar } from "../../components/common/scrollBar/style";

export const AdminPageWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${Main} {
    flex: auto;
    padding: 0;
    ${ScrollBar}
  }
  ${AccentButton} {
    background-color: #353455;
  }
  ${Input} {
    &:focus {
      box-shadow: 0 0 0 2.5px #353455 inset;
    }
  }
`;

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  filter: brightness(0);
  opacity: .3;
  width: 150px;
`;
