import { Link } from "react-router-dom";
import styled from "styled-components";
export const Contain = styled.div`
  margin: 30px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    font-size: 30px;
  }
  align-items: center;
  padding: 20px 50px;
`;

export const InputWrap = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  margin-top: 5px;
  width: 100%;
  padding: 15px;
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

export const ModifyButton = styled.button`
  width: 100%;
  border: none;
  padding: 13px;
  border-radius: 10px;
  background-color: #f2640b;
  font-size: 17px;
  text-align: center;
  color: white;
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

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const TextLink = styled(Link)`
  font-size: 15px;
  color: gray;
  cursor: pointer;
`;
