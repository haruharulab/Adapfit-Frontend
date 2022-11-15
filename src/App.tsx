import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Plan } from "./pages/planlist";
import { Admin } from "./pages/admin";
import { Home } from "./pages/home";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
