import styled from "styled-components";
export const Contain = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  width: 85%;
`;

export const CardContain = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  border-radius: 30px;
  margin: 0px 20px;
  background-color: grey;
  scrollbar-width: thin;
`;
export const Img = styled.div`
  width: 100%;
  height: 75%;
  border-radius: 30px 30px 0px 0px;
  background-color: skyblue;
`;
export const Content = styled.div`
  width: 100%;
  height: 25%;
  text-align: center;
  font-size: 20px;
`;
