import { Dispatch, SetStateAction } from "react";
import { AiFillSetting } from "react-icons/ai";
import { Position } from "../../../types/position.type";
import { DropdownMenu, DropdownMenuOption } from "../../common/dropdownMenu";
import * as S from "./style";

interface ManagePositionItemProps {
  position: Position,
  deletePosition: (id: number) => void;
  setSelectPosition: Dispatch<SetStateAction<Position | null>>,
  openModal: (key: string, closeable?: boolean) => void
}

const ManagePositionItem = ({
  position,
  deletePosition,
  setSelectPosition,
  openModal
}: ManagePositionItemProps) => {
  const dropdownMenus: DropdownMenuOption[] = [
    { text: '수정', callback: () => { setSelectPosition(position); openModal('updatePosition') } },
    { text: '삭제', callback: () => deletePosition(position.id) }
  ];

  return (
    <S.Item as='div'>
      <S.InfoWrap>
        <span>{position.position}</span>
      </S.InfoWrap>
      <DropdownMenu title={<AiFillSetting size={22} color='white' />} menus={dropdownMenus} />
    </S.Item>
  );
}

export default ManagePositionItem;
