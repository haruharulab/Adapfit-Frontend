import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { TokenRes, tokenState, userState } from "../../../store/user.store";
import { Admin, SuperAdmin } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import { FormSubmitButton } from "../button/style";
import { Input } from "../input/style";
import Modal from "../modal/modal";
import * as S from "./style";

const LoginModal = () => (
  <>
    <SuperAdminLoginModal />
    <AdminLoginModal />
  </>
);

const SuperAdminLoginModal = () => {
  const {ajax} = useAjax();
  const {openModal, closeModal} = useModal();
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const [token, tokenError] = await ajax<TokenRes>({
      url: "super/auth/token",
      method: HttpMethod.POST,
      payload: {
        authId: id,
        password,
      },
      noToken: true,
    });
    if (tokenError) return;
    setToken(token);

    const [user, userError] = await ajax<SuperAdmin>({
      url: "super",
      method: HttpMethod.GET,
      headers: {
        Authorization: token.accessToken,
      },
      noToken: true,
    });
    if (userError) return;
    setUser(user);
    closeModal('superAdminLogin');
  };

  return (
    <Modal id='superAdminLogin' title='슈퍼관리자 로그인'>
      <S.LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <Input
          placeholder='아이디'
          onChange={(e) => setId(e.target.value)}
          required
        />
        <Input
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          required
          type='password'
        />
        <FormSubmitButton>로그인</FormSubmitButton>
        <S.MenuWrap>
          <S.MenuText
            onClick={() => {
              openModal('adminLogin');
              closeModal('superAdminLogin');
            }}
          >
            일반관리자 로그인
          </S.MenuText>
        </S.MenuWrap>
      </S.LoginForm>
    </Modal>
  );
};

const AdminLoginModal = () => {
  const {ajax} = useAjax();
  const {openModal, closeModal} = useModal();
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const [token, tokenError] = await ajax<TokenRes>({
      url: "auth/token",
      method: HttpMethod.POST,
      payload: {
        authId: id,
        password,
      },
      noToken: true,
    });
    if (tokenError) return;
    setToken(token);

    const [user, userError] = await ajax<Admin>({
      url: "user",
      method: HttpMethod.GET,
      headers: {
        Authorization: token.accessToken,
      },
      noToken: true,
    });
    if (userError) return;
    setUser(user);
    closeModal('adminLogin');
  };

  return (
    <Modal id='adminLogin' title='일반관리자 로그인'>
      <S.LoginForm onSubmit={event => {
        event.preventDefault();
        login();
      }}>
        <Input
          placeholder='아이디'
          onChange={(e) => setId(e.target.value)}
          required
        />
        <Input
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          required
          type='password'
        />
        <FormSubmitButton type='submit'>로그인</FormSubmitButton>
        <S.MenuWrap>
        <S.MenuText
            onClick={() => {
              openModal('superAdminLogin');
              closeModal('adminLogin');
            }}
          >
            슈퍼관리자 로그인
          </S.MenuText>
        </S.MenuWrap>
      </S.LoginForm>
    </Modal>
  );
};

export default LoginModal;
