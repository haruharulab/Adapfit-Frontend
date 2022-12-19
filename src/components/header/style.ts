import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../common/container/style";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const HeaderContainer = styled.div`
  ${Container}
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
`;

export const Nav = styled.nav`
  display: flex;
  align-self: center;
  gap: 10px;
  font-weight: 550;
  font-size: 17px;
  a {
    color: black;
    padding: 10px 15px;
  }
`;

export const AccentLink = styled(NavLink)`
  background-color: #f2640b;
  border-radius: 10px;
  color: white !important;
`;

export const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const Logo = styled.img`
  cursor: pointer;
  display: flex;
  height: 40px;
  align-self: center;
`;
