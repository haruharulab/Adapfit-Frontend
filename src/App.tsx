import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppPageRoute from "./routes/app";
import { RecoilRoot } from "recoil";
import AdminPageRoute from "./routes/admin";
import ModalDim from "./components/common/modal/modalDim";

const App = () => (
  <RecoilRoot>
    <ModalDim />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppPageRoute />} />
        <Route path="/admin/*" element={<AdminPageRoute />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
