import { Route, Routes } from "react-router-dom";
import SuperAdminHeader from "../components/header/superAdmin";
import Notice from "../components/notice";
import SuperAdminDashboard from "../pages/superAdmin";
import AdminList from "../pages/superAdmin/adminlist";

const SuperAdminPageRoute = () => (
  <>
    <SuperAdminHeader />
    <Routes>
      <Route path="/" element={<AdminList />} />
      <Route path="notice" element={<Notice />} />
    </Routes>
  </>
);

export default SuperAdminPageRoute;
