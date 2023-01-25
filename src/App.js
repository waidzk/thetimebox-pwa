import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BoxPage from "./pages/BoxPage";
import Example from "./pages/Example";
import TimePage from "./pages/TimePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoxPage />} />
        <Route path="/timepage" element={<TimePage />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}
