import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail/detail";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
