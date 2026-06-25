import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Chess from "./pages/Chess";
import Running from "./pages/Running";
import Contact from "./pages/Contact";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/running" element={<Running />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
