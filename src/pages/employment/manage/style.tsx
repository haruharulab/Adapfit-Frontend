import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const Arrow = styled(FiArrowLeft)`
  height: 40px;
`;
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  width: 60%;
`;
export const NoticeConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  height: 90px;
  align-items: center;
  border: 1px solid gray;
  margin-bottom: 20px;
  width: calc(100%-50px);
  background-color: #fff;
  border: 0;
  border-radius: 10px;
`;
export const StyledSpan = styled.span`
  font-size: 17px;
  margin-right: 20px;
`;
export const Writer = styled(StyledSpan)`
  font-weight: 500;
  margin-right: 20px;
`;
export const WriterAndDate = styled.div`
  display: flex;
  gap: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  height: 70px;
  align-items: center;
  width: calc(100%-50px);
  div {
    display: flex;
    justify-content: space-between;
    width: 200px;
    height: 35px;
    text-align: center;
    justify-content: center;
  }
`;
export const Img = styled.img`
  width: 30px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  font-size: 1rem;
  width: 200px;
  height: 100%;
  background-color: #f2f2f2;
  color: #494949;
  border: 0;
  align-items: center;
  border-radius: 5px;
`;
