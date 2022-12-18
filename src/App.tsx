import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import AdminPageRoute from "./routes/admin";
import AppPageRoute from "./routes/app";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<AppPageRoute />} />
      <Route path="/admin/*" element={<AdminPageRoute />} />
    </Routes>
  </BrowserRouter>
);

export default App;
