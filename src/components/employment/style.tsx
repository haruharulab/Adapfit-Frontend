import styled from "styled-components";

export const Contain = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
  span {
    width: 15%;
    text-align: center;
    line-height: 40px;
  }
  .pattern {
    line-height: 1.3;
    height: 2.6rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const Name = styled.div`
  margin-left: 10px;
  width: 45%;
`;
