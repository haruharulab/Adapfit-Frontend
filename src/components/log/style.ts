import styled from "styled-components";

export const Item = styled.div`
  border-radius: 5px;
  padding: 15px 30px;
  margin: 5px 0;
  color: white;
  background-color: #4f4e6b;
  transition: .25s;
  &:hover {
    background-color: #353455;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 15px;
  }
`;

export const ItemHeader = styled(Item)`
  color: black;
  background-color: white !important;
  padding: 0 30px 10px 30px;
  @media screen and (max-width: 600px) {
    padding: 0 15px 10px 15px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 75px;
  }
  span:first-child {
    flex: auto;
  }
  span:last-child {
    min-width: 170px;
  }
`;
