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
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 425px;
  border-radius: 10px;
  margin: 30px;
  ${Shadow}
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 350px;
  }
  @media screen and (max-width: 450px) {
    height: 250px;
  }
`;

export const Img = styled.div<{
  img: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 40%;
  bottom: 0;
  color: black;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  gap: 5px;
  h4 {
    font-size: 26px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  p {
    font-size: 17px;
    color: gray
  }
  @media screen and (max-width: 550px) {
    padding: 0 20px;
    h4 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 0 15px;
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
    }
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
  border-radius: 10px;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #00000044;
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
  color: white;
  font-size: 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #00000044;
    opacity: 1;
  }
`;
