import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
import Sidebarnew from "./components/sidebar/Sidebar";

import ThemeTemplate from "./components/ThemingTemplate/ThemeTemplates";
import {
  Home,
  About,
  Skills,
  Contact,
  ProjectPage,
  ErrorPage,
} from "./pages";



import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebarnew />
    <ThemeTemplate/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
