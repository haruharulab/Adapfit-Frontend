import { BsChevronDown } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { Shadow } from "../shadow/style";

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
  color: black;
  &:hover ul {
    opacity: 1;
    transform: translate(-50%, 0) !important;
    animation: blocking_click 250ms ease;
    animation-fill-mode: forwards;
  }
  @keyframes blocking_click {
    0% {
        pointer-events: none;
    }
    99%{}
    100% {
        pointer-events: visible;
    }
  }
`;

export const DropdownTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  padding: 10px 16px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  ${Shadow}
`;

export const DropdownMark = styled(FiChevronDown)`
  width: 25px;
  height: 25px;
`;

export const DropdownContent = styled.ul`
  padding-top: 3px;
  position: absolute;
  z-index: 1;
  width: 120px;
  transform: translate(-50%, -15px);
  left: 50%;
  opacity: 0;
  pointer-events: none;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  word-break: keep-all;
  border-radius: 8px;
  transition: all .25s;
  display: flex;
  flex-direction: column;
  ${Shadow}
`;

export const Option = styled.li`
  width: 100%;
  cursor: pointer;
  transition: .25s;
  background-color: white;
  &:hover {
    background-color: #CCC;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
  &:first-child:last-child {
    border-radius: 5px;
  }
  list-style: none;
  padding: 7px 0;
`;
