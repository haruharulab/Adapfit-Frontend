import { Route, Routes } from "react-router-dom";
import Notice from "../components/notice";
import AdminDashboard from "../pages/admin/dashboard";
import { PlanHome } from "../pages/admin/plan";
import BannerManage from "../pages/banner/manage";
import PlanEdit from "../pages/plan/edit/edit";
import NoticeDetail from "../components/notice/detail";
import CreatePlan from "../pages/plan/create/create";
import { Main } from "../components/common/main/style";
import AdminSideBar from "../components/common/sidebar/adminSideBar";
import { AdminPageWrap } from "../pages/admin/dashboard/style";
import AdminList from "../pages/superAdmin/adminlist";
import AdminIndex from "../pages/admin";
import CreateRecruitment from "../pages/recruitment/create";
import ManageRecruitment from "../pages/recruitment/manage";
import EditRecruitment from "../pages/recruitment/edit";

const AdminPageRoute = () => (
  <AdminPageWrap>
    <AdminSideBar />
    <Main>
      <Routes>
        <Route path="/*" element={<AdminIndex />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/create" element={<NoticeDetail />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/plan/:id" element={<PlanEdit />} />
        <Route path="/plan/create" element={<CreatePlan />} />
        <Route path="/plan" element={<PlanHome />} />
        <Route path="/banner" element={<BannerManage />} />
        <Route path="/recruitment" element={<ManageRecruitment />} />
        <Route path="/recruitment/create" element={<CreateRecruitment />} />
        <Route path="/recruitment/:id" element={<EditRecruitment />} />
        <Route path="/adminlist" element={<AdminList />} />
      </Routes>
    </Main>
  </AdminPageWrap>
);

export default AdminPageRoute;
