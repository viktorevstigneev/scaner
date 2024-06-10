
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { paths } from "./constants";

function App() {
  return (
    <Routes>
    <Route path={paths.main} element={<MainPage />} />
    <Route path="*" element={<Navigate to={paths.home} replace />} />
  </Routes>
  );
}

export default App;
