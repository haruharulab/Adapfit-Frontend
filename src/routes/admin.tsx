import { Route, Routes } from "react-router-dom";
import AdminHeader from "../components/header/admin";
import Notice from "../components/notice";
import AdminDashboard from "../pages/admin";

const AdminPageRoute = () => (
  <>
    <AdminHeader />
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="notice" element={<Notice />} />
    </Routes>
  </>
)

export default AdminPageRoute;