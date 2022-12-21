import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../common/container/style";

export const Contain = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  .copyright {
    margin-top: 25px;
  }
  padding: 30px 40px;
  background-color: white;
`;

export const ContentWrap = styled.div`
  ${Container}
  max-width: 1320px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Footer_logo = styled.img`
  margin-top: 10px;
  width: 150px;
  height: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: #464646;
  font-size: 100%;
  letter-spacing: -0.6px;
  p {
    margin-top: 10px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Sns = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  img {
    width: 33px;
    height: 33px;
  }
`;

export const AdminLink = styled(Link)`
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f2640b;
`;
