import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
