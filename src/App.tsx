import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import AdminPageRoute from "./routes/admin";
import AppPageRoute from "./routes/app";

const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/plan" element={<PlanHome />} />
          <Route path="/plan/:id" element={<PlanDetail />} />
          <Route path="/admin/*" element={<AdminPageRoute />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/employment/:id" element={<Detail />} />
          <Route path="/resume/:id" element={<Resume />} />
            <Route path="*" element={<AppPageRoute />} />
            <Route path="/admin/*" element={<AdminPageRoute />} />
        </Routes>
    </BrowserRouter>
);

export default App;
