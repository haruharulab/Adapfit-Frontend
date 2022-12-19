import { Route, Routes } from "react-router-dom";
import AdminHeader from "../components/header/admin";
import Notice from "../components/notice";
import AdminDashboard from "../pages/admin";
import BannerManage from "../pages/banner/manage";
import PlanEdit from "../pages/plan/edit/edit";

const AdminPageRoute = () => (
  <>
    <AdminHeader />
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/plan/:id" element={<PlanEdit />} />
      <Route path="/banner" element={<BannerManage />} />
    </Routes>
  </>
)

export default AdminPageRoute;