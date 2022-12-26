import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import channelService from "../components/channel/channelService";
import { Main } from "../components/common/main/style";
import Footer from "../components/footer";
import { Header } from "../components/header";
import RecruitmentList from "../pages/recruitment";
import Detail from "../pages/EmploymentDetail";
import { Home } from "../pages/home";
import PlanDetail from "../pages/plan/detail/detail";
import { PlanHome } from "../pages/plan/index";
import Resume from "../pages/resume";
import { footerHeightState } from "../store/common.store";
import useAnalytics from "../utils/useAnalytics";

const AppPageRoute = () => {
  const footerHeight = useRecoilValue(footerHeightState);
  useAnalytics();
  
  useEffect(() => {
    channelService.boot({
      pluginKey: process.env.REACT_APP_CHANNEL_SERVICE_PLUGIN_KEY,
    });
    return () => {
      channelService.shutdown();
    }
  }, []);

  return (
    <>
      <Header />
      <Main height={footerHeight}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/plan" element={<PlanHome />} />
          <Route path="/plan/:id" element={<PlanDetail />} />
          <Route path="/recruitment" element={<RecruitmentList />} />
          <Route path="/recruitment/:id" element={<Detail />} />
          <Route path="/resume/:id" element={<Resume />} />
        </Routes>
        <Footer />
      </Main>
    </>
  );
}

export default AppPageRoute;