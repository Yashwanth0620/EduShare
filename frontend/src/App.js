import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Header from "./components/Home/Header";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import NavBar from "./components/Dashboard/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateGroup from "./components/Groups/CreateGroup";
import MyGroups from "./components/Groups/MyGroups";
import Messages from "./components/Groups/Messages";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="app">
        {isAuthenticated ? (
          <div className="d-flex h-100">
            <NavBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/new-group" element={<CreateGroup />} />
              <Route path="/my-groups" element={<MyGroups />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </div>
        ) : (
          <div className="">
            <Header />
            <Routes>
              <Route path="/login" element={<Auth page="login" />} />
              <Route path="/register" element={<Auth page="register" />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
