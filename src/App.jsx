import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fffaf7] font-sans text-[#392b27]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
