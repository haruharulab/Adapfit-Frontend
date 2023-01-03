import { useState } from "react";
import { FormSubmitButton } from "../../../components/common/button/style";
import { Input } from "../../../components/common/input/style";
import Modal from "../../../components/common/modal/modal";
import { Position } from "../../../types/position.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";

interface PositionManageModalProps {
  selectPosition: Position | null,
  loadPositionList: () => void,
}

const ManagePositionModal = ({
  selectPosition,
  loadPositionList
}: PositionManageModalProps) => (<>
  <CreatePositionModal loadPositionList={loadPositionList} />
  <UpdatePositionModal selectPosition={selectPosition} loadPositionList={loadPositionList} />
</>);

interface CreatePositionModalProps {
  loadPositionList: () => void
}

const CreatePositionModal = ({
  loadPositionList
}: CreatePositionModalProps) => {
  const { ajax } = useAjax();
  const { closeModal } = useModal();
  const [position, setPosition] = useState<string>('');

  const createPosition = async () => {
    const [, error] = await ajax({
      url: 'position',
      method: HttpMethod.POST,
      payload: {
        position
      }
    });
    if (error) return;
    closeModal('createPosition');
    loadPositionList();
  }

  return (
    <Modal id='createPosition' title="포지션 생성">
      <form onSubmit={e => {
        e.preventDefault();
        createPosition();
      }}>
        <Input
          type="text"
          onChange={e => setPosition(e.target.value)}
          placeholder='포지션'
          required
        />
        <FormSubmitButton>포지션 생성</FormSubmitButton>
      </form>
    </Modal>
  );
}

interface UpdatePositionModalProps {
  selectPosition: Position | null,
  loadPositionList: () => void
}

const UpdatePositionModal = ({
  selectPosition,
  loadPositionList
}: UpdatePositionModalProps) => {
  const { ajax } = useAjax();
  const { closeModal } = useModal();
  const [position, setPosition] = useState<string>('');

  const updatePosition = async () => {
    if (!selectPosition) return alert('선택된 포지션이 없습니다');
    const [, error] = await ajax({
      url: `position/${selectPosition.id}`,
      method: HttpMethod.PUT,
      payload: {
        position
      }
    });
    if (error) return;
    closeModal('updatePosition');
    loadPositionList();
  }

  return (
    <Modal
      id='updatePosition'
      title="포지션 수정"
      callback={() => {
        if (!selectPosition) return;
        setPosition(selectPosition.position);
      }}
    >
      <form onSubmit={e => {
        e.preventDefault();
        updatePosition();
      }}>
        <div>
          <span>포지션</span>
          <Input
            type="text"
            onChange={e => setPosition(e.target.value)}
            value={position}
            placeholder='포지션'
            required
          />
        </div>
        <FormSubmitButton>포지션 수정</FormSubmitButton>
      </form>
    </Modal>
  );
}

export default ManagePositionModal;