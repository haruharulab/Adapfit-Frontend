import { useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { Button, FormSubmitButton } from "../../components/common/button/style";
import { Input } from "../../components/common/input/style";
import Modal from "../../components/common/modal/modal";
import { userState } from "../../store/user.store";
import { Authority, SuperAdmin } from "../../types/user.type";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { useModal } from "../../utils/modal";

const SuperAdminManageModal = () => (<>
  <ManageSuperAdminModal />
  <UpdateSuperAdminModal />
  <UpdateSuperAdminPwModal />
</>);

const ManageSuperAdminModal = () => {
  const { openModal, closeModal } = useModal();

  return (
    <Modal
      id='manageSuperAdmin'
      title="슈퍼관리자 정보 수정"
    >
      <form>
        <FormSubmitButton onClick={() => { openModal('updateSuperAdminInfo'); closeModal('manageSuperAdmin'); }}>정보 수정</FormSubmitButton>
        <FormSubmitButton onClick={() => { openModal('updateSuperAdminPw'); closeModal('manageSuperAdmin'); }}>비밀번호 수정</FormSubmitButton>
      </form>
    </Modal>
  );
}

const UpdateSuperAdminModal = () => {
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const { ajax } = useAjax();
  const { closeModal } = useModal();
  const [authId, setAuthId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const updateAdmin = async () => {
    const [, updateError] = await ajax({
      url: 'super',
      method: HttpMethod.PUT,
      payload: {
        authId,
        email,
        nickname
      }
    });
    if (updateError) return;
    resetUser();
    closeModal('updateSuperAdminInfo');
  }

  return (
    <Modal
      id='updateSuperAdminInfo'
      title="정보 수정"
      callback={() => {
        if (user.authority !== Authority.ROOT) return;
        setAuthId(user.authId);
        setNickname(user.nickname);
        setEmail(user.email);
      }}
    >
      <form onSubmit={e => {
        e.preventDefault();
        updateAdmin();
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
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder='이메일'
            required
          />
        </div>
        <FormSubmitButton>정보 수정 후 로그아웃</FormSubmitButton>
      </form>
    </Modal>
  );
}

const UpdateSuperAdminPwModal = () => {
  const [, setUser] = useRecoilState(userState);
  const { ajax } = useAjax();
  const { closeModal } = useModal();
  const [newPassword, setNewPassword] = useState<string>('');
  const [validatePassword, setValidatePassword] = useState<string>('');

  const updateAdminPw = async () => {
    const [, updateError] = await ajax({
      url: 'super/pw',
      method: HttpMethod.PUT,
      payload: {
        newPassword,
        validatePassword
      }
    });
    if (updateError) return;
    const [superAdmin, loadError] = await ajax<SuperAdmin>({
      url: 'super',
      method: HttpMethod.GET
    });
    if (loadError) return;

    setUser(superAdmin);
    closeModal('updateSuperAdminPw');
  }

  return (
    <Modal
      id='updateSuperAdminPw'
      title="슈퍼관리자 비밀번호 변경"
      callback={() => {
        setNewPassword('');
        setValidatePassword('');
      }}
    >
      <form onSubmit={e => {
        e.preventDefault();
        updateAdminPw();
      }}>
        <Input
          type="password"
          onChange={e => setNewPassword(e.target.value)}
          placeholder='새 비밀번호'
          required
        />
        <Input
          type="password"
          onChange={e => setValidatePassword(e.target.value)}
          placeholder='새 비밀번호 확인'
          required
        />
        <FormSubmitButton>슈퍼관리자 비밀번호 변경</FormSubmitButton>
      </form>
    </Modal>
  );
}

export default SuperAdminManageModal;