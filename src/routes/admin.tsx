import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Notice from "../components/notice";
import { Admin } from "../pages/admin";
import Login from "../pages/login";
import Signup from "../pages/signup";

const AdminPageRoute = () => (
  <RecoilRoot>
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="notice" element={<Notice />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  </RecoilRoot>
)

export default AdminPageRoute;