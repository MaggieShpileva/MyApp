import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Speakers } from "./components/speakers/speakers.tsx";
import { Home } from "./components/Home/Home.tsx";
import { AboutUs } from "./components/AboutUs/AboutUs.tsx";
import { Testimonials } from "./components/Testimonials/Testimonials.tsx";
import { Blog } from "./components/Blog/Blog.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Testimonials" element={<Testimonials />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
