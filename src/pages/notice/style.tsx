import styled from "styled-components";
import img from "./image.png";
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NoticeConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  height: 90px;
  align-items: center;
  border: 1px solid gray;
  margin-bottom: 40px;
  width: calc(100%-50px);
`;
export const StyledSpan = styled.span`
  font-size: 20px;
`;
export const Writer = styled(StyledSpan)`
  color: gray;
`;
export const WriterAndDate = styled.div`
  display: flex;
  gap: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  height: 50px;
  align-items: center;
  width: calc(100%-50px);
`;
export const Img = styled.img`
  width: 30px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
