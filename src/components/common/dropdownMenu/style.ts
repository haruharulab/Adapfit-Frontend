import styled from "styled-components";
import { Shadow } from "../shadow/style";

export const DropdownMenu = styled.div`
  z-index: 10;
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

export const Title = styled.span`
  position: relative;
  font-weight: bold;
  padding: 12px 16px;
  cursor: pointer;
`;

export const DropdownContent = styled.ul`
  width: 120px;
  transform: translate(-50%, -15px);
  left: 50%;
  opacity: 0;
  pointer-events: none;
  position:  absolute;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  word-break: keep-all;
  border-radius: 5px;
  background-color: white;
  transition: all .25s;
  display: flex;
  flex-direction: column;
  ${Shadow}
`;

export const Option = styled.li`
  width: 100%;
  cursor: pointer;
  transition: .25s;
  border-radius: 5px;
  &:hover {
    background-color: #CCC;
  }
  list-style: none;
  padding: 7px 0;
`;

// .meatballs_menu .title {
//   font-size: 1.7rem;
//   letter-spacing: -.3rem;
//   padding: 0 1rem 0 .75rem;
//   border-radius: .5rem;
//   background-color: var(--level-3);
// }

// .meatballs_menu .dropdown_content .option {
//   width: 16rem;
// }