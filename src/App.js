import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Pass from "./components/SignIn/Pass";
import GAuth from "./components/SignIn/GAuth";
import GitAuth from "./components/SignIn/GitAuth";
import XAuth from "./components/SignIn/XAuth";

const App = () => {
  const [email, setEmail] = useState('')
  const [news, setNew] = useState('')
  return (
    <>
      <Routes >
        <Route path="/" element={<SignIn setEmail={setEmail} setNew={setNew} />} />
        <Route path="/pass" element={<SignUp news={news} email={email} />} />
        <Route path="/check" element={<Pass news={news} setEmail={setEmail} email={email} setNew={setNew} />} />
        <Route path="/gauth/session/oauth/google" element={<GAuth />} />
        <Route path="/gauth/session/oauth/github" element={<GitAuth />} />
        <Route path="/gauth/session/oauth/twitter" element={<XAuth />} />

      </Routes>
    </>
  );
};

export default App;
