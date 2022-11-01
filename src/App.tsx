import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlanList from "./pages/planlist";
import Admin from "./pages/admin";
import Header from "./components/header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/planlist" element={<PlanList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
