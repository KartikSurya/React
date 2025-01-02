import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../ClassComponents/Footer";
import Home from "./Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
