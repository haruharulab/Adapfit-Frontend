import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Plan } from "./pages/planlist";
import { Admin } from "./pages/admin";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import Footer from "./components/footer";
import Notice from "./pages/notice";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Employment from "./pages/employment";
import Resume from "./pages/resume";
import Detail from "./pages/EmploymentDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="employment/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
