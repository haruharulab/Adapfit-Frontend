import * as S from "./style";
import { useEffect, useState } from "react";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { AccentButton } from "../../../components/common/button/style";
import { Position } from "../../../types/position.type";
import ManagePositionItem from "../../../components/recruitment/position/manageItem";
import ManagePositionModal from "./modal";
import PositionInfoHeader from "../../../components/recruitment/position/header";

const ManagePosition = () => {
  const user = useRecoilValue(userState);
  const { ajax } = useAjax();
  const { openModal } = useModal();
  const [selectPosition, setSelectPosition] = useState<Position | null>(null);
  const [positionList, setPositionList] = useState<Position[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
    loadPositionList();
  }, [user]);

  const loadPositionList = async () => {
    const [data, error] = await ajax<Position[]>({
      url: 'position',
      method: HttpMethod.GET,
    });
    if (error) return;
    setPositionList(data);
  }

  const deletePosition = async (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?\n이 포지션과 연관된 채용공고는 모두 삭제되며\n이 작업은 되돌릴 수 없습니다!')) return;
    const [, deleteError] = await ajax({
      url: `position/${id}`,
      method: HttpMethod.DELETE
    });
    if (deleteError) return;
    loadPositionList();
  };

  return (<>{
    user.authority === Authority.ROOT &&
    <S.Contain>
      <ManagePositionModal selectPosition={selectPosition} loadPositionList={loadPositionList} />
      <S.Header>채용 포지션 관리</S.Header>
      <S.MenuWrap>
        <AccentButton onClick={() => openModal('createPosition')}>포지션 생성</AccentButton>
      </S.MenuWrap>
      <S.ItemWrap>
        <PositionInfoHeader />
        <hr />
        {positionList.map(position => (
          <ManagePositionItem
            position={position}
            deletePosition={deletePosition}
            setSelectPosition={setSelectPosition}
            openModal={openModal}
          />
        ))}
      </S.ItemWrap>
    </S.Contain>
  }</>);
}

export default ManagePosition;
