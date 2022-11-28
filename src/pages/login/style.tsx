import styled from "styled-components";
export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginWrapper = styled.div`
  width: 40%;
  height: 400px;
  background-color: lightgray;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span {
    font-size: 50px;
  }
  align-items: center;
`;

export const Input = styled.textarea`
  width: 60%;
  height: 60px;
  font-size: 20px;
  line-height: 60px;
  padding-left: 20px;
  resize: none;
`;
export const Btn_login = styled.div`
  width: 60%;
  height: 50px;
  border-radius: 10px;
  background-color: yellow;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
`;

export const NoneId = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
