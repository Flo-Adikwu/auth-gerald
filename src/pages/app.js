import React from "react";
import Login from "../auth/login"
import Profile from '../pages/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
)
}

export default App;