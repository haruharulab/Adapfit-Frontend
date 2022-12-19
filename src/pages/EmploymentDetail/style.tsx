import styled from "styled-components";

export const Contain = styled.div`
  width: 60%;
  margin: 20px auto;
  span {
    font-size: 17px;
    font-weight: 700;
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h1 {
    font-weight: 600;
    font-size: 28px;
    padding-bottom: 10px;
  }
`;

export const InfoBox = styled.div`
  padding: 20px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  ul li {
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;
export const SubmitBtn = styled.div`
  cursor: pointer;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: #d9d9d9;
  width: 400px;
  border-radius: 10px;
  margin: 50px auto;

  background: lightgrey;
  transform: perspective(1px) translateZ(0);
  transition: color 0.3s;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: #f2640b;
    transform: scaleX(0);
    transform-origin: 0 50%;
    border-radius: 10px;
    transition: transform 0.3s ease-out;
  }
  &:hover {
    color: white;
    border-radius: 10px;
    &::before {
      border-radius: 10px;
      transform: scaleX(1);
    }
  }
`;
