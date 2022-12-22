import styled from "styled-components";
import { HomePlanCardContain } from "./planCardStyle";

export const PlanGallery = styled.div`
  margin: 30px 0;
  width: 100%;
  .swiper-free-mode > .swiper-wrapper {
    transition-timing-function : linear;
  }
  .home-plan-card:nth-child(2n) ${HomePlanCardContain} {
    margin-top: 80px;
    margin-bottom: 10px;
  }
  .home-plan-card:nth-child(2n+1) ${HomePlanCardContain} {
    margin-top: 10px;
    margin-bottom: 80px;
  }
`;
