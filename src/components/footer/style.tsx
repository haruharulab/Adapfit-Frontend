import styled from "styled-components";

export const Contain = styled.footer`
  width: calc(100% - 80px);
  display: flex;
  gap: 30px;
  margin-top: 100px;
  .copyright {
    margin-top: 25px;
  }
  padding: 0px 40px;
  padding-bottom: 30px;
  justify-content: space-around;
  flex-wrap: wrap;
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
