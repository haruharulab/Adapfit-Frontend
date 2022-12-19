import { Route, Routes } from "react-router-dom";
import AdminHeader from "../components/header/admin";
import Notice from "../components/notice";
import AdminDashboard from "../pages/admin";
import PlanEdit from "../pages/plan/edit/edit";

const AdminPageRoute = () => (
  <>
    <AdminHeader />
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/plan/:id" element={<PlanEdit />} />
    </Routes>
  </>
)

export default AdminPageRoute;