import styled from "styled-components";
import { DropdownMenu, DropdownTitle } from "../common/dropdownMenu/style";

export const Item = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 15px 30px;
  margin: 5px 0;
  color: white;
  background-color: #4f4e6b;
  transition: .25s;
  ${DropdownTitle} {
    background-color: transparent;
    padding: 0 10px;
  }
  ${DropdownMenu} {
    margin-left: auto;
  }
  &:hover {
    background-color: #353455;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 15px;
  }
`;

export const ItemHeader = styled(Item)`
  color: black;
  background-color: white !important;
  padding: 0 10px 10px 30px;
  @media screen and (max-width: 600px) {
    padding: 0 15px 10px 15px;
  }
`;

export const InfoWrap = styled.div`
  flex: 1;
  max-width: calc(100% - 44px);
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Email = styled.a`
  flex: 1;
  color: white;
  text-decoration: underline;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;
