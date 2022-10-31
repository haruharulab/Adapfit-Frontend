import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlanList from "./pages/planlist";
import Admin from "./pages/admin";
import Header from "./components/header";
import { Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Admin />
    </>
  );
}

export default App;
