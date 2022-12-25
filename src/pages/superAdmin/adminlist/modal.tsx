import { useState } from "react";
import { FormSubmitButton } from "../../../components/common/button/style";
import { Input } from "../../../components/common/input/style";
import Modal from "../../../components/common/modal/modal";
import { Admin } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";

interface AdminManageModalProps {
  selectAdmin: Admin | null,
  loadAdminList: () => void,
}

const AdminManageModal = ({
  selectAdmin,
  loadAdminList
}: AdminManageModalProps) => (<>
  <CreateAdminModal loadAdminList={loadAdminList} />
  <UpdateAdminModal selectAdmin={selectAdmin} loadAdminList={loadAdminList} />
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
    const [, error] = await ajax({
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

interface UpdateAdminModalProps {
  selectAdmin: Admin | null,
  loadAdminList: () => void
}

const UpdateAdminModal = ({
  selectAdmin,
  loadAdminList
}: UpdateAdminModalProps) => {
  const {ajax} = useAjax();
  const {closeModal} = useModal();
  const [authId, setAuthId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const createAdmin = async () => {
    if (!selectAdmin) return alert('선택된 어드민이 없습니다');
    const [, error] = await ajax({
      url: `super/${selectAdmin.userId}`,
      method: HttpMethod.PUT,
      payload: {
        authId,
        email,
        nickname,
        phoneNumber
      }
    });
    if (error) return;
    closeModal('updateAdmin');
    loadAdminList();
  }

  return (
    <Modal
      id='updateAdmin'
      title="관리자 정보 수정"
      callback={() => {
        if (!selectAdmin) return;
        setAuthId(selectAdmin.authId);
        setNickname(selectAdmin.nickname);
        setEmail(selectAdmin.email);
        setPhoneNumber(selectAdmin.phoneNumber);
      }}
    >
      <form onSubmit={e => {
        e.preventDefault();
        createAdmin();
      }}>
        <div>
          <span>아이디</span>
          <Input
            type="text"
            onChange={e => setAuthId(e.target.value)}
            value={authId}
            placeholder='아이디'
            required
          />
        </div>
        <div>
          <span>닉네임</span>
          <Input
            type="text"
            onChange={e => setNickname(e.target.value)}
            value={nickname}
            placeholder='닉네임'
            required
          />
        </div>
        <div>
          <span>이메일</span>
          <Input
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder='이메일'
            required
          />
        </div>
        <div>
          <span>전화번호</span>
          <Input
            type="text"
            onChange={e => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder='전화번호'
            required
          />
        </div>
        <FormSubmitButton>관리자 정보 수정</FormSubmitButton>
      </form>
    </Modal>
  );
}

export default AdminManageModal;