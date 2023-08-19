import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/page/LoginPage/Login";
import RegistrationPage from "./pages/page/RegistrationPage/RegistrationPage";
import Home from "./pages/page/Home";
import User from "./pages/page/UserPage/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
