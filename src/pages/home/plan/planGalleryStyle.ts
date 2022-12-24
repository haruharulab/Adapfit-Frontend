import styled from "styled-components";
import { HomePlanCardLink } from "./planCardStyle";

export const PlanGallery = styled.div`
  margin: 70px 0 150px;
  width: 100%;
  .swiper-free-mode > .swiper-wrapper {
    transition-timing-function : linear;
  }
  .home-plan-card:nth-child(2n) ${HomePlanCardLink} {
    margin-top: 80px;
    margin-bottom: 10px;
  }
  .home-plan-card:nth-child(2n+1) ${HomePlanCardLink} {
    margin-top: 10px;
    margin-bottom: 80px;
  }
`;
