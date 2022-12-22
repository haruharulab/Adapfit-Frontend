import { Link } from "react-router-dom";
import styled from "styled-components";
import { AccentShadow, Shadow } from "../../../components/common/shadow/style";

export const HomePlanCardLink = styled(Link)`
  display: inline-block;
  width: 180px;
  min-width: 180px;
  height: 245px;
  cursor: pointer;
  ${AccentShadow}
  div {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform .25s;
  }
  &:hover img {
    transform: scale(1.05);
  }
  p {
    position: absolute;
    bottom: 0;
    z-index: 2;
    padding: 20px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 -10px 10px 50px #00000044 ;
  }
`;
