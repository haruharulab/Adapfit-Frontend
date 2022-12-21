import { Link } from "react-router-dom";
import styled from "styled-components";
import { Shadow } from "../common/shadow/style";

export const List = styled.div`
  display: flex;
  text-align: center;
  white-space: nowrap;
  padding: 25px 50px;
  overflow: hidden;
`;

export const CardContain = styled(Link)`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  width: 400px;
  min-width: 400px;
  height: 300px;
  border-radius: 20px;
  margin: 20px;
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
  height: 30%;
  position: absolute;
  bottom: 0;
  color: black;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  gap: 2px;
  h4 {
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  p {
    font-size: 14px;
    color: gray
  }
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
