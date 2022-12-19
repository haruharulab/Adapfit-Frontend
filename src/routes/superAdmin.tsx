import { Route, Routes } from "react-router-dom";
import SuperAdminHeader from "../components/header/superAdmin";
import Notice from "../components/notice";
import SuperAdminDashboard from "../pages/superAdmin";

const SuperAdminPageRoute = () => (
  <>
    <SuperAdminHeader />
    <Routes>
      <Route path="/" element={<SuperAdminDashboard />} />
      <Route path="notice" element={<Notice />} />
    </Routes>
  </>
)

export default SuperAdminPageRoute;