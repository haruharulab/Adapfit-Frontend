import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { useModal } from "../../../utils/modal";
import { modalState } from "../../../store/modal.store";
import { Dim } from "./style";

const ModalDim = () => {
  const {closeAllModal} = useModal();
  const [modalList] = useRecoilState(modalState);
  
  return createPortal(
    (
      Object.keys(modalList).length > 0 &&
      <Dim onClick={closeAllModal} />
    ), document.querySelector('#modal-wrap') as HTMLElement
  )
};

export default ModalDim;