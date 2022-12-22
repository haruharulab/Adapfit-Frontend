import styled from "styled-components";
import { HomePlanCardContain } from "./planCardStyle";

export const PlanGallery = styled.div`
  margin: 30px 0;
  max-width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  gap: 30px;
  ${HomePlanCardContain}:nth-child(2n) {
    align-self: flex-start;
  }
  ${HomePlanCardContain}:nth-child(2n+1) {
    align-self: flex-end;
  }
`;
