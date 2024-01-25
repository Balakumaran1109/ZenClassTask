import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FullStack from "./FullStack";
import Data_Science from "./Data_Science";
import Cyber_Security from "./Cyber_Security";
import Career from "./Career";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/full-stack-development" element={<FullStack />}></Route>
          <Route path="/data-science" element={<Data_Science />}></Route>
          <Route path="/cyber-security" element={<Cyber_Security />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
