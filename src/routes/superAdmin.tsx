import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AdminHeader from "../components/header/admin";
import Notice from "../components/notice";
import SuperAdminDashboard from "../pages/superAdmin";

const SuperAdminPageRoute = () => (
  <>
    <AdminHeader />
    <Routes>
      <Route path="/" element={<SuperAdminDashboard />} />
      <Route path="notice" element={<Notice />} />
    </Routes>
  </>
)

export default SuperAdminPageRoute;