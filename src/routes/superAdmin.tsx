import { Route, Routes } from "react-router-dom";
import LoginModal from "../components/common/login/login";
import { Main } from "../components/common/main/style";
import SuperAdminHeader from "../components/header/superAdmin";
import Notice from "../components/notice";
import AdminList from "../pages/superAdmin/adminlist";
import Modify from "../pages/superAdmin/modify";

const SuperAdminPageRoute = () => (
  <>
    <SuperAdminHeader />
    <LoginModal />
    <Main>
      <Routes>
        <Route path="/" element={<AdminList />} />
        <Route path="notice" element={<Notice />} />
        <Route path="admin" element={<AdminList />} />
        <Route path="admin/:userId" element={<Modify />} />
      </Routes>
    </Main>
  </>
);

export default SuperAdminPageRoute;
