import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Admin } from ".";
import Login from "../login";
import Notice from "../notice";
import Signup from "../signup";

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