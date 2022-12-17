import styled from "styled-components";
import { TopShadow } from "../common/shadow/style";
export const Contain = styled.footer`
  width: calc(100% - 80px);
  display: flex;
  gap: 30px;
  margin-top: 50px;
  ${TopShadow}
  .copyright {
    margin-top: 25px;
  }
  padding: 30px 40px;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
`;
export const Footer_logo = styled.img`
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

export const Sns = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  img {
    width: 33px;
    height: 33px;
  }
`;
