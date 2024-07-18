import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/Services";
import AboutPage from "./Pages/AboutUs";
import ProjectsPage from "./Pages/Projects";
import ContactPage from "./Pages/ContactUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
