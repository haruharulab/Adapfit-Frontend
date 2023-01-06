import { useState } from "react";
import { useRecoilState } from "recoil";
import { FormSubmitButton } from "../../components/common/button/style";
import { Input } from "../../components/common/input/style";
import Modal from "../../components/common/modal/modal";
import { userState } from "../../store/user.store";
import { Admin, Authority } from "../../types/user.type";
import { HttpMethod, useAjax } from "../../utils/ajax";
import { useModal } from "../../utils/modal";

const UpdateAdminModal = () => {
  const [user, setUser] = useRecoilState(userState);
  const { ajax } = useAjax();
  const { closeModal } = useModal();
  const [authId, setAuthId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [center, setCenter] = useState<string>('');

  const updateAdmin = async () => {
    const [, updateError] = await ajax({
      url: 'user',
      method: HttpMethod.PUT,
      payload: {
        authId,
        email,
        nickname,
        phoneNumber,
        center
      }
    });
    if (updateError) return;
    const [admin, loadError] = await ajax<Admin>({
      url: 'user',
      method: HttpMethod.GET
    });
    if (loadError) return;

    setUser(admin);
    closeModal('updateMyInfo');
  }

  return (
    <Modal
      id='updateMyInfo'
      title="정보 수정"
      callback={() => {
        if (user.authority !== Authority.ADMIN) return;
        setAuthId(user.authId);
        setNickname(user.nickname);
        setEmail(user.email);
        setPhoneNumber(user.phoneNumber);
        setCenter(user.center);
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
        <div>
          <span>센터 정보</span>
          <Input
            type="text"
            onChange={e => setCenter(e.target.value)}
            value={center}
            placeholder='센터 정보'
            required
          />
        </div>
        <FormSubmitButton>정보 수정</FormSubmitButton>
      </form>
    </Modal>
  );
}

export default UpdateAdminModal;