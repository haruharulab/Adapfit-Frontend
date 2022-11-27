import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Plan } from "./pages/planlist";
import { Admin } from "./pages/admin";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import Footer from "./components/footer";
import Notice from "./pages/notice";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
