import { useState } from "react";
import { Button, FormSubmitButton } from "../../../components/common/button/style";
import { Input } from "../../../components/common/input/style";
import Modal from "../../../components/common/modal/modal";
import { CreateAdminRes } from "../../../types/admin.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";

interface AdminManageModalProps {
  loadAdminList: () => void,
}

const AdminManageModal = ({
  loadAdminList
}: AdminManageModalProps) => (<>
  <CreateAdminModal loadAdminList={loadAdminList} />
</>);

interface CreateAdminModalProps {
  loadAdminList: () => void
}

const CreateAdminModal = ({
  loadAdminList
}: CreateAdminModalProps) => {
  const {ajax} = useAjax();
  const {closeModal} = useModal();
  const [authId, setAuthId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const createAdmin = async () => {
    const [, error] = await ajax<CreateAdminRes>({
      url: 'super/admin',
      method: HttpMethod.POST,
      payload: {
        authId,
        password,
        validatePassword: passwordCheck,
        nickname,
        email,
        phoneNumber
      }
    });
    if (error) return;
    closeModal('createAdmin');
    loadAdminList();
  }

  return (
    <Modal id='createAdmin' title="관리자 생성">
      <form onSubmit={e => {
        e.preventDefault();
        createAdmin();
      }}>
        <Input
          type="text"
          onChange={e => setAuthId(e.target.value)}
          placeholder='아이디'
          required
        />
        <Input
          type="text"
          onChange={e => setPassword(e.target.value)}
          placeholder='비밀번호'
          required
        />
        <Input
          type="text"
          onChange={e => setPasswordCheck(e.target.value)}
          placeholder='비밀번호 확인'
          required
        />
        <Input
          type="text"
          onChange={e => setNickname(e.target.value)}
          placeholder='닉네임'
          required
        />
        <Input
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder='이메일'
          required
        />
        <Input
          type="text"
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder='전화번호'
          required
        />
        <FormSubmitButton>관리자 생성</FormSubmitButton>
      </form>
    </Modal>
  );
}

export default AdminManageModal;