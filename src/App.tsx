import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SuperAdminPageRoute from "./routes/superAdmin";
import AppPageRoute from "./routes/app";
import { RecoilRoot } from "recoil";

const App = () => (
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppPageRoute />} />
        <Route path="/superadmin/login" element={<Login />} />
        <Route path="/superadmin/*" element={<SuperAdminPageRoute />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
