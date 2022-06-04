import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Welcome from "./pages/WelcomePage/Welcome";
import Skills from "./pages/SkillsPage/Skills";
import Projects from "./pages/ProjectsPage/Projects";
import AboutMe from "./pages/AboutMePage/AboutMe";
import NoPage from "./pages/ErrorPage/NoPage";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about-me" element={<AboutMe /> } />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);