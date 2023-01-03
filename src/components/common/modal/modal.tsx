import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { useModal } from "../../../utils/modal";
import { modalState } from "../../../store/modal.store";
import { ModalCloseButton, ModalContent, ModalTitle, ModalWrap } from "./style";

interface ModalProps {
  children?: ReactNode,
  id: string,
  type?: string,
  title?: string | ReactNode,
  menuList?: {
    name: string,
    element: ReactNode
  }[],
  callback?: Function,
  selectMenuCallback?: (i: number) => void
}

const Modal = ({
  children,
  id,
  title,
  callback,
}: ModalProps) => {
  const { closeModal } = useModal();
  const [modalList] = useRecoilState(modalState);

  useEffect(() => {
    if (!callback || !modalList[id]) return;
    callback();
  }, [modalList]);

  return createPortal(
    modalList[id] && (
      <ModalWrap>
        <ModalTitle>{title}</ModalTitle>
        {
          modalList[id].closeable &&
          <ModalCloseButton onClick={() => closeModal(id)}>×</ModalCloseButton>
        }
        <ModalContent>{children}</ModalContent>
      </ModalWrap>
    ),
    document.querySelector('#modal-wrap') as HTMLElement
  );
};

export default Modal;