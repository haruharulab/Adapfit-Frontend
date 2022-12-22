import styled from "styled-components";
import { AccentShadow, Shadow } from "../../../components/common/shadow/style";

export const HomePlanCardContain = styled.div`
  position: relative;
  width: 180px;
  min-width: 180px;
  height: 245px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${AccentShadow}
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  p {
    color: white;
  }
`;