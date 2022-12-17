import styled from "styled-components";
import { isBooleanObject } from "util/types";

export const Contain = styled.div`
  width: 80%;
  margin: 20px auto;
  span {
    font-size: 20px;
    display: block;
    margin-top: 40px;
    margin-bottom: 10px;
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
  font-size: 20px;
  margin-bottom: 20px;
  resize: none;
`;

export const FileInput = styled.div`
  width: calc(100% - 10px);
  background-color: white;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const SubmitBtn = styled.div<{ isFilled: Boolean }>`
  cursor: ${(props) => (props.isFilled ? "pointer" : "")};
  width: 400px;
  height: 59px;
  line-height: 59px;
  text-align: center;
  font-size: 30px;
  color: white;
  background-color: ${(props) => (props.isFilled ? "#F2640B" : "#d9d9d9")};
  width: 400px;
  border-radius: 10px;
  margin: 50px auto;
`;
