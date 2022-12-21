import { Route, Routes } from "react-router-dom";
import AdminHeader from "../components/header/admin";
import Notice from "../components/notice";
import AdminDashboard from "../pages/admin";
import { PlanHome } from "../pages/admin/plan";
import BannerManage from "../pages/banner/manage";
import PlanEdit from "../pages/plan/edit/edit";
import NoticeDetail from "../components/noticedetail";
import CreatePlan from "../pages/plan/create/create";
import ManageEmployment from "../pages/employment/manage";
import { Main } from "../components/common/main/style";
const AdminPageRoute = () => (
  <>
    <AdminHeader />
    <Main>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice:id" element={<NoticeDetail />} />
        <Route path="/noticedetail" element={<NoticeDetail />} />
        <Route path="/plan/:id" element={<PlanEdit />} />
        <Route path="/plan/create" element={<CreatePlan />} />
        <Route path="/plan" element={<PlanHome />} />
        <Route path="/banner" element={<BannerManage />} />
        <Route path="/employment" element={<ManageEmployment />} />
      </Routes>
    </Main>
  </>
);

export default AdminPageRoute;
