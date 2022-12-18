import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import AdminPageRoute from "./routes/admin";
import AppPageRoute from "./routes/app";
import { Home } from "./pages/home";
import { PlanHome } from "./pages/plan/index";
import PlanDetail from "./pages/plan/detail/detail";
import Employment from "./pages/employment";
import Detail from "./pages/EmploymentDetail";
import Resume from "./pages/resume";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/plan" element={<PlanHome />} />
      <Route path="/plan/:id" element={<PlanDetail />} />
      <Route path="/admin/*" element={<AdminPageRoute />} />
      <Route path="/employment" element={<Employment />} />
      <Route path="/employment/:id" element={<Detail />} />
      <Route path="/resume/:id" element={<Resume />} />
      <Route path="*" element={<AppPageRoute />} />
      <Route path="/admin/*" element={<AdminPageRoute />} />
    </Routes>
  </BrowserRouter>
);

export default App;
