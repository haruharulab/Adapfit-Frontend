import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px !important;
`;

export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const TextLink = styled(Link)`
  font-size: 15px;
  color: gray;
  cursor: pointer;
`;
