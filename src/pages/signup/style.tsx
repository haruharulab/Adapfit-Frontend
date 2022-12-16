import styled from "styled-components";
export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginWrapper = styled.div`
  width: 27%;
  box-sizing: border-box;
  height: 570px;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span {
    font-size: 30px;
  }
  align-items: center;
  padding: 20px 50px;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  box-sizing: border-box;
  resize: none;
  background-color: #fff7ea;
  border: 0;
  border-radius: 10px;
  font-size: 15px;
  ::placeholder {
    color: #adadad;
  }
`;
export const Btn_login = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background-color: #f2640b;
  font-size: 15px;
  text-align: center;
  line-height: 45px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`;

export const Text = styled.div`
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  padding-left: 7px;
  font-size: 15px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 23px;
`;
