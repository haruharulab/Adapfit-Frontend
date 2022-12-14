import { Route, Routes } from "react-router-dom";
import ManageBanner from "../pages/banner/manage";
import PlanEdit from "../pages/plan/edit/edit";
import NoticeDetail from "../pages/notice/detail";
import CreatePlan from "../pages/plan/create/create";
import { Main } from "../components/common/main/style";
import AdminSideBar from "../components/common/sidebar/adminSideBar";
import AdminList from "../pages/superAdmin/adminlist";
import AdminIndex from "../pages/admin";
import CreateRecruitment from "../pages/recruitment/create";
import ManageRecruitment from "../pages/recruitment/manage";
import EditRecruitment from "../pages/recruitment/edit";
import CreateNotice from "../pages/notice/create";
import EditNotice from "../pages/notice/edit";
import { AdminPageWrap } from "../pages/admin/style";
import ManagePlan from "../pages/plan/manage";
import ManagePlanCategory from "../pages/plan/category";
import ManageResume from "../pages/resume/manage";
import ResumeDetail from "../pages/resume/detail";
import LogList from "../pages/admin/log";
import ManagePosition from "../pages/recruitment/position";
import NoticePage from "../pages/notice/manage/admin";
import ManageNotice from "../pages/notice/manage/superAdmin";
import UpdateAdminModal from "../components/admin/modal";
import SuperAdminManageModal from "../components/superAdmin/modal";

const AdminPageRoute = () => (
  <AdminPageWrap>
    <AdminSideBar />
    <SuperAdminManageModal />
    <UpdateAdminModal />
    <Main>
      <Routes>
        <Route path="/*" element={<AdminIndex />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/edit/:id" element={<EditNotice />} />
        <Route path="/notice/create" element={<CreateNotice />} />
        <Route path="/notice/manage" element={<ManageNotice />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/plan/:id" element={<PlanEdit />} />
        <Route path="/plan/create" element={<CreatePlan />} />
        <Route path="/plan" element={<ManagePlan />} />
        <Route path="/plan/category" element={<ManagePlanCategory />} />
        <Route path="/banner" element={<ManageBanner />} />
        <Route path="/recruitment" element={<ManageRecruitment />} />
        <Route path="/recruitment/create" element={<CreateRecruitment />} />
        <Route path="/recruitment/:id" element={<EditRecruitment />} />
        <Route path="/recruitment/position" element={<ManagePosition />} />
        <Route path="/resume" element={<ManageResume />} />
        <Route path="/resume/:id" element={<ResumeDetail />} />
        <Route path="/adminlist" element={<AdminList />} />
        <Route path="/log" element={<LogList />} />
      </Routes>
    </Main>
  </AdminPageWrap>
);

export default AdminPageRoute;
