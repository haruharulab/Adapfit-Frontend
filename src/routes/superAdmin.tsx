import { Route, Routes } from "react-router-dom";
import SuperAdminHeader from "../components/header/superAdmin";
import Notice from "../components/notice";
import SuperAdminDashboard from "../pages/superAdmin";
import AdminList from "../pages/superAdmin/adminlist";
import Modify from "../pages/superAdmin/modify";

const SuperAdminPageRoute = () => (
  <>
    <SuperAdminHeader />
    <Routes>
      <Route path="/" element={<SuperAdminDashboard />} />
      <Route path="notice" element={<Notice />} />
      <Route path="adminlist" element={<AdminList />} />
      <Route path="adminmodify/:id" element={<Modify />} />
    </Routes>
  </>
);

export default SuperAdminPageRoute;
