import styled from "styled-components";
import { HorizontalScrollBar } from "../../components/common/scrollBar/style";

export const BannerImg = styled.img`
  display: flex;
  width: 100%;
  height: 600px;
  padding-bottom: 80px;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  padding-bottom: 80px;
`;

export const PlanGallery = styled.div`
  height: 500px;
  padding-left: 30px;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
  ${HorizontalScrollBar};
`;

export const PlanList = styled.div`
  display: inline-flex;
  margin: 0px 20px;
  width: 300px;
  height: 470px;
  border-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
  flex-direction: column;
`;

export const PlanImg = styled.img`
  display: flex;
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 70%;
  padding-bottom: 20px;
`;
export const DownContain = styled.div`
  text-align: center;
`
export const DownBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 20px;
  height: 150px;
  border: 2px solid #9B9B9B;
  border-radius: 10px;
  span {
    color: gray;
    margin-bottom: 50px;
    margin-left: 15px;
    font-size: 30px;
  }
  img {
    width: 70px;
    height: 40px;
    margin-right: 15px;
  }
`

export const Counselor = styled.div`
  position: fixed;
  top: 600px;
  right: 30px;
  color: gray;
  .counselor {
    size: 24;
  }
`
