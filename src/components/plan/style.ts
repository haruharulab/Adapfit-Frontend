import styled from "styled-components";
import { HorizontalScrollBar } from "../common/scrollBar/style";
export const Contain = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  ${HorizontalScrollBar}
  overflow: auto;
`;

export const CardContain = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  width: 300px;
  height: 250px;
  border-radius: 30px;
  margin: 0px 20px;
  scrollbar-width: thin;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
`;
export const Img = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px 30px;
  background-image: url('/image/test.png');
  background-size: cover;
`;
export const Content = styled.div`
  width: 100%;
  height: 25%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: #00000055;
  border-radius: 0px 0px 30px 30px;
`;
