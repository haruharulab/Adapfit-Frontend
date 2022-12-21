import styled from "styled-components";
import { ScrollBar } from "../scrollBar/style";
import { Shadow } from "../shadow/style";

export const Dim = styled.div`
`;

export const ModalWrap = styled.div`
  pointer-events: all;
  margin-top: 70px;
  width: 400px;
  min-width: 200px;
  min-height: 60px;
  position: absolute;
  font-weight: bold;
  word-break: keep-all;
  padding: 15px 10px 10px;
  border-radius: 20px;
  ${Shadow}
  background-color: white;
  z-index: 101;
  animation: modal_show 100ms ease-out;
  @keyframes modal_show {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
  @media screen and (min-width: 0px) and (max-width: 800px) {
    & {
      max-width: calc(100% - 10px);
      min-width: 0;
    }
  }
`;

export const ModalTitle = styled.p`
  margin: 0 50px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  top: 10px;
  right: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  margin-top: 10px;
  text-align: center;
  max-height: calc(100vh - 150px);
  ${ScrollBar}
  overflow-y: auto;
  form {
    margin-top: 10px;
  }
`;