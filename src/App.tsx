import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { PlanHome } from "./pages/plan/index";
import { Admin } from "./pages/admin";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import Footer from "./components/footer";
import Notice from "./pages/notice";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Employment from "./pages/employment";
import channelService from "./components/channel/channelService";
import PlanDetail from "./pages/plan/detail/detail";
import AdminPageRoute from "./pages/admin/route";
import Resume from "./pages/resume";
import Detail from "./pages/EmploymentDetail";

function App() {
  channelService.boot({
    pluginKey: process.env.REACT_APP_CHANNEL_SERVICE_PLUGIN_KEY,
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/plan" element={<PlanHome />} />
          <Route path="/plan/:id" element={<PlanDetail />} />
          <Route path="/admin/*" element={<AdminPageRoute />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/employment/:id" element={<Detail />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
