import styled from "styled-components";
export const Contain = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export const CardContain = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 250px;
  border-radius: 30px;
  background-color: grey;
`;
export const Img = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 30px 30px 0px 0px;
  background-color: black;
`;
export const Content = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  font-size: 20px;
`;
