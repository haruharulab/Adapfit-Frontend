import styled from "styled-components";
import { ScrollBar } from "../scrollBar/style";
import { AccentShadow } from "../shadow/style";

export const SideBar = styled.div<{isOpen: boolean}>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  transform: translateX(${({isOpen}) => isOpen? '0%': '-100%'});
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  background-color: #353455;
  transition: .25s;
  ${AccentShadow};

`;

export const SideBarOnOff = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 50%;
  right: 0;
  width: 30px;
  height: 50px;
  background-color: #353455;
  color: white;
  transform: translate(100%, -50%);
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export const Logo = styled.img`
  filter: brightness(100);
`;

export const SideBarHeader = styled.div`
  padding: 30px;
  ${Logo} {
    width: 100px;
    margin-top: 10px;
    margin-left: 5px;
    cursor: pointer;
  }
  p {
    margin-top: 20px;
    padding: 0 5px;
    font-size: 14px;
  }
  hr {
    margin-top: 10px;
  }
`;

export const SideBarItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  width: 270px;
  padding: 10px 20px;
  gap: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: .25s;
  &:hover {
    background-color: #4f4e6b;
  }
`;

export const SideBarItemIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBarItemContent = styled.div`
  font-size: 17px;
`;

export const SideBarContentWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  padding: .75rem;
  height: 100%;
  ${ScrollBar}
`;

