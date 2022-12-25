import styled from "styled-components";
import { DropdownMenu, DropdownTitle } from "../common/dropdownMenu/style";

export const Contain = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px 30px;
  margin: 5px 0;
  color: white;
  background-color: #4f4e6b;
  ${DropdownTitle} {
    background: none;
    padding: 10px;
  }
  ${DropdownMenu} {
    margin-left: auto;
  }
`;

export const InfoWrap = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    flex: 1;
    overflow: hidden;
    word-wrap: break-word;
    text-align: left;
  }
`;

export const DetailInfoWrap = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    flex: 1;
    overflow: hidden;
    word-wrap: break-word;
    text-align: left;
  }
`;

export const Email = styled.a`
  flex: 1;
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;
