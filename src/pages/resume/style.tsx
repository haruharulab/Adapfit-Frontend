import styled from "styled-components";
import { isBooleanObject } from "util/types";

export const Contain = styled.div`
  width: 60%;
  margin: 20px auto;
  span {
    font-size: 17px;
    font-weight: 700;
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h1 {
    font-weight: 600;
    font-size: 28px;
    padding-bottom: 10px;
  }
`;
export const TextArea = styled.textarea`
  width: calc(100% - 10px);
  background-color: white;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  font-size: 17px;
  margin-bottom: 10px;
  resize: none;
`;
export const EmailArea = styled.input`
  width: calc(100% - 10px);
  background-color: white;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  margin-bottom: 20px;
  &:valid {
    border-color: green;
  }
  &:invalid {
    border-color: red;
  }
`;
export const FileInput = styled.div`
  width: calc(100% - 10px);
  background-color: white;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  font-size: 17px;
  color: rgb(118, 118, 118);
  margin-bottom: 20px;
  cursor: pointer;
  .file {
    padding-right: 10px;
  }
`;

export const SubmitBtn = styled.div<{ isFilled: Boolean }>`
  cursor: ${(props) => (props.isFilled ? "pointer" : "")};
  width: 400px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: ${(props) => (props.isFilled ? "#F2640B" : "#d9d9d9")};
  width: 400px;
  border-radius: 10px;
  margin: 50px auto;
`;
