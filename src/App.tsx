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
import { PlanDetail } from "./pages/plan/detail";

function App() {
  channelService.boot({
      "pluginKey": process.env.REACT_APP_CHANNEL_SERVICE_PLUGIN_KEY
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/plan" element={<PlanHome />} />
          <Route path="/plan/:id" element={<PlanDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employment" element={<Employment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
