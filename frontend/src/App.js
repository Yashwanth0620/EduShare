import Auth from "./components/Auth/Auth"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./components/Home/About"
import Contact from "./components/Home/Contact"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Auth page="login" />} />
          <Route path="/register" element={<Auth page="register" />} />
          <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
