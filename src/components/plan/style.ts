import { Link } from "react-router-dom";
import styled from "styled-components";
import { HorizontalScrollBar } from "../common/scrollBar/style";
import { Shadow } from "../common/shadow/style";
export const List = styled.div`
  display: flex;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  padding: 25px 50px;
  ${HorizontalScrollBar}
  overflow: auto;
`;

export const CardContain = styled(Link)`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  height: 250px;
  border-radius: 20px;
  margin: 0px 20px;
  scrollbar-width: thin;
  ${Shadow}
`;
export const ManageCardContain = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  height: 250px;
  border-radius: 20px;
  margin: 0px 20px;
  scrollbar-width: thin;
  ${Shadow}
`;
export const Img = styled.div<{
  img: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;
export const Content = styled.div`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: #00000055;
  border-radius: 0px 0px 20px 20px;
`;

export const Remove = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
  color: white;
  font-size: 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #000000AA;
  }
`;

export const Edit = styled(Link)`
  opacity: 0;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
  color: white;
  font-size: 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #000000AA;
    opacity: 1;
  }
`;
