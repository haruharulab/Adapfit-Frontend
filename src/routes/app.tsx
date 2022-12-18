import { Route, Routes } from "react-router-dom";
import channelService from "../components/channel/channelService";
import Footer from "../components/footer";
import { Header } from "../components/header";
import Employment from "../pages/employment";
import Detail from "../pages/EmploymentDetail";
import { Home } from "../pages/home";
import PlanDetail from "../pages/plan/detail/detail";
import { PlanHome } from "../pages/plan/index";
import Resume from "../pages/resume";

const AppPageRoute = () => {
    channelService.boot({
        pluginKey: process.env.REACT_APP_CHANNEL_SERVICE_PLUGIN_KEY,
    });

    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/plan" element={<PlanHome />} />
                <Route path="/plan/:id" element={<PlanDetail />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/employment/:id" element={<Detail />} />
                <Route path="/resume/:id" element={<Resume />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AppPageRoute;