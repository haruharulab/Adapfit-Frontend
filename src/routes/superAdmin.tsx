import { Route, Routes } from "react-router-dom";
import SuperAdminHeader from "../components/header/superAdmin";
import Notice from "../components/notice";
import AdminList from "../pages/superAdmin/adminlist";
import Modify from "../pages/superAdmin/modify";

const SuperAdminPageRoute = () => (
  <>
    <SuperAdminHeader />
    <main>
      <Routes>
        <Route path="/" element={<AdminList />} />
        <Route path="notice" element={<Notice />} />
        <Route path="admin" element={<AdminList />} />
        <Route path="admin/:userId" element={<Modify />} />
      </Routes>
    </main>
  </>
);

export default SuperAdminPageRoute;
