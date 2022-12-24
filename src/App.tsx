import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import SuperAdminPageRoute from "./routes/superAdmin";
import AppPageRoute from "./routes/app";
import { RecoilRoot } from "recoil";
import AdminLogin from "./pages/admin/login";
import SuperAdminLogin from "./components/common/login/login";
import AdminPageRoute from "./routes/admin";
import { PlanHome } from "./pages/admin/plan";
import ModalDim from "./components/common/modal/modalDim";

const App = () => (
  <RecoilRoot>
    <ModalDim />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppPageRoute />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminPageRoute />} />
        <Route path="/superadmin/login" element={<SuperAdminLogin />} />
        <Route path="/superadmin/*" element={<SuperAdminPageRoute />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
