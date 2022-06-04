import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Buyer from "./Pages/Buyer/Buyer";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import LandWanted from "./Pages/LandWanted/LandWanted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/land-wanted" element={<LandWanted />} />
        <Route path="/interested-buyers" element={<Buyer />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
